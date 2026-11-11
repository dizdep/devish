const scene = document.querySelector('.scene');
const seal = document.querySelector('.seal');
const hint = document.querySelector('.hint');

seal.addEventListener('click', () => {
  const isOpen = scene.classList.toggle('is-open');
  seal.setAttribute('aria-expanded', String(isOpen));
  seal.setAttribute('aria-label', isOpen ? 'Close invitation' : 'Open invitation');
  hint.textContent = isOpen ? 'Tap the seal to close' : 'Tap the seal to open';
});
