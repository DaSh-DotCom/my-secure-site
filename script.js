document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('cursedpic');
  const btn = document.getElementById('newCursed Pic');
  const pool = [
    '/images/freshchicken.jpeg',
    '/images/monke.jpeg',
    '/images/whatevenisthis.jpeg',
    '/images/giveboinguslove.jpeg',
    '/images/peaceandquiet.jpeg',
    '/images/imdoneforthenight.jpeg',
    '/images/shaq.jpeg',
  ];

  function pick() {
    const i = Math.floor(Math.random() * pool.length);
    return pool[i];
  }

  async function loadMeme() {
    // Cache-bust so you see changes during development
    const url = pick() + `?t=${Date.now()}`;
    img.src = url;
  }

  btn?.addEventListener('click', loadMeme);
  loadMeme();
});
