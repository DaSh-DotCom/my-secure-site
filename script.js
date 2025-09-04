// Keep JS minimal; avoid DOM injection. Use textContent, not innerHTML.
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear().toString();

  const btn = document.getElementById('ping');
  if (btn) btn.addEventListener('click', () => {
    alert('🎉 Your JS works, and CSP allows it because it is same-origin.');
  });
});
