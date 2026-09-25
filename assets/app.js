(() => {
  const progress = document.getElementById('pageProgress');
  const paintProgress = () => {
    const root = document.documentElement;
    const total = root.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
    if (progress) progress.style.width = `${Math.max(0, Math.min(100, pct))}%`;
  };

  addEventListener('scroll', paintProgress, { passive: true });
  addEventListener('resize', paintProgress, { passive: true });
  paintProgress();

  const elements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -30px 0px' });
    elements.forEach((el) => observer.observe(el));
  } else {
    elements.forEach((el) => el.classList.add('visible'));
  }

  const prevent = (e) => e.preventDefault();
  ['contextmenu', 'copy', 'cut', 'dragstart'].forEach((type) => {
    document.addEventListener(type, prevent);
  });

  document.addEventListener('keydown', (e) => {
    const key = String(e.key || '').toLowerCase();
    if ((e.ctrlKey || e.metaKey) && ['c','x','s','u','p'].includes(key)) e.preventDefault();
    if ((e.ctrlKey || e.metaKey) && ['+','-','=','0'].includes(key)) e.preventDefault();
  });

  document.addEventListener('wheel', (e) => {
    if (e.ctrlKey) e.preventDefault();
  }, { passive: false });

  document.addEventListener('gesturestart', prevent, { passive: false });
  document.addEventListener('gesturechange', prevent, { passive: false });
  document.addEventListener('dblclick', prevent, { passive: false });

  let lastTouch = 0;
  document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouch <= 320) e.preventDefault();
    lastTouch = now;
  }, { passive: false });
})();