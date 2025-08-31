// Claim-Reveal
(() => {
  const el = document.getElementById('claim');
  if (!el) return;
  const io = new IntersectionObserver(
    (entries) => { if (entries[0].isIntersecting) el.classList.add('revealed'); },
    { threshold: 0.3 }
  );
  io.observe(el);
})();

// FAQ: nur ein <details> gleichzeitig geöffnet
(() => {
  const items = Array.from(document.querySelectorAll('details.card'));
  if (!items.length) return;

  items.forEach(d => {
    d.addEventListener('toggle', () => {
      if (d.open) {
        items.forEach(other => { if (other !== d) other.open = false; });
      }
    });
  });
})();

// Jahr im Footer
(() => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
