const scrollContainer = document.querySelector('.content');
const overlay = document.querySelector('.bg-overlay');

scrollContainer.addEventListener('scroll', () => {
  const scrollTop = scrollContainer.scrollTop;
  const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;

  const scrollProgress = scrollTop / scrollHeight;
  overlay.style.opacity = Math.min(scrollProgress, 1);
});
