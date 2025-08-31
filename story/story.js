// Claim-Reveal beim Sichtbarwerden
(() => {
  const el = document.getElementById('claim');
  if (!el) return;
  const io = new IntersectionObserver(
    (entries) => { if (entries[0].isIntersecting) el.classList.add('revealed'); },
    { threshold: 0.3 }
  );
  io.observe(el);
})();

// Smooth-Scroll für Links/Buttons mit data-scroll oder Anker-Links
(() => {
  const sel = '[data-scroll], a[href^="#"]:not([href="#"])';
  document.querySelectorAll(sel).forEach(el => {
    el.addEventListener('click', (e) => {
      const href = el.getAttribute('data-scroll') || el.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();

// Jahr im Footer
(() => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
