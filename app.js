// Claim Reveal beim Sichtbarwerden
const claim = document.getElementById('claim');
if (claim) {
  const io = new IntersectionObserver(
    (entries) => { if (entries[0].isIntersecting) claim.classList.add('revealed'); },
    { threshold: 0.3 }
  );
  io.observe(claim);
}

// Smooth Scroll für Buttons mit data-scroll
document.querySelectorAll('[data-scroll]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.getAttribute('data-scroll'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Jahr im Footer automatisch setzen
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
