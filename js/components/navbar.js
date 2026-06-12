const Navbar = (() => {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const navLinks = document.querySelectorAll('.navbar__link');

  function init() {
    if (!navbar) return;

    window.addEventListener('scroll', handleScroll);
    toggle?.addEventListener('click', toggleMenu);
    navLinks.forEach(link => link.addEventListener('click', closeMenu));
    setupActiveSection();
  }

  function handleScroll() {
    navbar.classList.toggle('navbar--scrolled', window.scrollY > 20);
  }

  function toggleMenu() {
    const isOpen = links.classList.toggle('open');
    toggle.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  }

  function closeMenu() {
    links.classList.remove('open');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function setupActiveSection() {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
              link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach(section => observer.observe(section));
  }

  return { init };
})();
