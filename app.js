(() => {
  let language = 'ja';
  try { language = localStorage.getItem('musucus-language') === 'en' ? 'en' : 'ja'; } catch {}
  const languageButton = document.getElementById('language');
  const count = document.getElementById('result-count');
  function updateCount() {
    if (!count) return;
    const n = document.querySelectorAll('.work:not([hidden])').length;
    count.textContent = language === 'ja' ? `${n} 点` : `${n} works`;
  }
  function translate() {
    document.documentElement.lang = language;
    document.querySelectorAll('[data-ja][data-en]').forEach(el => { el.innerHTML = el.dataset[language]; });
    document.querySelectorAll('[data-alt-ja][data-alt-en]').forEach(el => { el.alt = language === 'ja' ? el.dataset.altJa : el.dataset.altEn; });
    languageButton.textContent = language === 'ja' ? 'EN' : '日本語';
    languageButton.setAttribute('aria-label', language === 'ja' ? 'Switch to English' : '日本語に切り替える');
    document.querySelector('.filters')?.setAttribute('aria-label', language === 'ja' ? '作品のサイズで絞り込む' : 'Filter works by longest dimension');
    updateCount();
    if (document.getElementById('enquiry-result') && !document.getElementById('enquiry-result').hidden) prepareNote();
  }
  languageButton.addEventListener('click', () => {
    language = language === 'ja' ? 'en' : 'ja';
    try { localStorage.setItem('musucus-language', language); } catch {}
    translate();
  });
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); });
    document.querySelectorAll('.work').forEach(work => { work.hidden = button.dataset.filter !== 'all' && button.dataset.filter !== work.dataset.category; });
    updateCount();
  }));
  function prepareNote() {
    const ja = language === 'ja';
    const fields = [['motif', ja ? 'モチーフ・色・イメージ' : 'Motif, colours & inspiration'], ['size', ja ? '希望サイズ' : 'Approximate dimensions'], ['budget', ja ? '予算' : 'Budget'], ['place', ja ? '用途・場所・希望時期' : 'Use, setting & timing']];
    const text = fields.map(([id,label]) => `${label}: ${document.getElementById(id).value.trim() || (ja ? '相談したいです' : 'To discuss')}`).join('\n\n');
    document.getElementById('enquiry-note').value = (ja ? 'musucus オーダーメイドの相談\n\n' : 'Custom rug enquiry for musucus\n\n') + text;
    document.getElementById('enquiry-result').hidden = false;
    document.getElementById('copy-status').textContent = '';
  }
  document.getElementById('enquiry-builder')?.addEventListener('submit', event => {
    event.preventDefault(); prepareNote(); document.getElementById('enquiry-note').focus();
  });
  document.getElementById('copy-note')?.addEventListener('click', async () => {
    const note = document.getElementById('enquiry-note');
    const status = document.getElementById('copy-status');
    try {
      await navigator.clipboard.writeText(note.value);
      status.textContent = language === 'ja' ? 'コピーしました。お問い合わせフォームまたはDMに貼り付けてください。' : 'Copied. Paste your note into the contact form or an Instagram DM.';
    } catch {
      note.focus(); note.select();
      status.textContent = language === 'ja' ? 'メモを選択しました。お使いの端末のコピー操作でコピーしてください。' : 'Your note is selected. Use your device’s Copy command to copy it.';
    }
  });
  translate();
})();
