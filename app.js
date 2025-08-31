// Claim-Reveal auf allen Seiten
const claim = document.getElementById('claim');
if (claim) {
  const io = new IntersectionObserver(
    (entries)=>{ if(entries[0].isIntersecting) claim.classList.add('revealed'); },
    { threshold: 0.3 }
  );
  io.observe(claim);
}

// Smooth Scroll für Buttons/Links mit data-scroll
document.querySelectorAll('[data-scroll]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const target = document.querySelector(btn.getAttribute('data-scroll'));
    if (target) target.scrollIntoView({ behavior:'smooth', block:'start' });
  });
});

// Jahr im Footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// FAQ: nur ein Panel offen halten (optional)
const faqDetails = document.querySelectorAll('.faq details');
faqDetails.forEach(d=>{
  d.addEventListener('toggle', ()=>{
    if (d.open) faqDetails.forEach(o=>{ if(o!==d) o.removeAttribute('open'); });
  });
});

// Blog: (optional) Tag-Filter (MVP: simple, ohne URL-Params)
const filterContainer = document.querySelector('[data-post-filter]');
if (filterContainer){
  filterContainer.addEventListener('click', (e)=>{
    const btn = e.target.closest('[data-tag]');
    if(!btn) return;
    const tag = btn.getAttribute('data-tag');
    document.querySelectorAll('.post').forEach(card=>{
      card.style.display = (tag==='all' || card.dataset.tag===tag) ? '' : 'none';
    });
    // Active style
    filterContainer.querySelectorAll('[data-tag]').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  });
}
