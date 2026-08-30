// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form: static site, no backend — show a confirmation and
// offer a mailto/tel fallback instead of pretending to submit anywhere.
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

if (form && note) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    if (!name) return;
    note.textContent = 'Спасибо! Пожалуйста, продублируйте заявку звонком или в Instagram — форма на сайте пока не подключена к почте клиники.';
    form.reset();
  });
}
