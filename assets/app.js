(() => {
  const progress = document.getElementById('scrollProgress');
  const updateProgress = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - innerHeight;
    const value = max > 0 ? (scrollY / max) * 100 : 0;
    if (progress) progress.style.width = `${Math.min(100, Math.max(0, value))}%`;
  };
  addEventListener('scroll', updateProgress, { passive: true });
  addEventListener('resize', updateProgress, { passive: true });
  updateProgress();

  const reveal = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    reveal.forEach((el) => observer.observe(el));
  } else {
    reveal.forEach((el) => el.classList.add('visible'));
  }

  const stop = (e) => e.preventDefault();
  ['contextmenu','copy','cut','dragstart'].forEach((type) => document.addEventListener(type, stop));
  document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if ((e.ctrlKey || e.metaKey) && ['c','x','s','u','p'].includes(key)) e.preventDefault();
    if ((e.ctrlKey || e.metaKey) && ['+','-','=','0'].includes(key)) e.preventDefault();
  });
  document.addEventListener('wheel', (e) => {
    if (e.ctrlKey) e.preventDefault();
  }, { passive: false });
  document.addEventListener('gesturestart', stop, { passive: false });
  document.addEventListener('dblclick', stop, { passive: false });
})();