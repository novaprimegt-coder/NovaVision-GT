(() => {
  const OFFICIAL_LOGO = 'data:image/jpeg;base64,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';

  const forceOfficialLogo = () => {
    const apply = (img) => {
      if (!img) return;
      img.src = OFFICIAL_LOGO;
      img.removeAttribute('srcset');
      img.style.display = 'block';
      img.style.visibility = 'visible';
      img.style.opacity = '1';
    };

    document.querySelectorAll('.brand-logo-img,.core-logo-img,.footer-logo-img').forEach(apply);

    const brand = document.querySelector('.brand');
    if (brand && !brand.querySelector('.brand-logo-img')) {
      const img = document.createElement('img');
      img.className = 'brand-logo-img';
      img.alt = 'Logo NovaVision GT';
      img.draggable = false;
      img.src = OFFICIAL_LOGO;
      brand.prepend(img);
    }

    const module = document.querySelector('.module-shell');
    if (module && !module.querySelector('.core-logo-img')) {
      const img = document.createElement('img');
      img.className = 'core-logo-img';
      img.alt = 'Logo NovaVision GT';
      img.draggable = false;
      img.src = OFFICIAL_LOGO;
      module.appendChild(img);
    }
  };

  forceOfficialLogo();
  requestAnimationFrame(forceOfficialLogo);
  setTimeout(forceOfficialLogo, 250);

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