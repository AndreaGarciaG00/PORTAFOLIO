const Animations = (() => {
  let observer;

  function init() {
    setupScrollReveal();
    observeDynamicElements();
  }

  function setupScrollReveal() {
    const staticElements = document.querySelectorAll(
      '.section__header, .about__content, .service-card, .vnnox__card, .edu-card, .contact__simple'
    );

    staticElements.forEach(el => el.classList.add('reveal'));

    observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  function observeDynamicElements() {
    const mutationObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1 && node.classList?.contains('reveal')) {
            observer.observe(node);
          }
        });
      });
    });

    const skillsGrid = document.getElementById('skillsGrid');
    const projectsGrid = document.getElementById('projectsGrid');

    if (skillsGrid) mutationObserver.observe(skillsGrid, { childList: true });
    if (projectsGrid) mutationObserver.observe(projectsGrid, { childList: true });
  }

  return { init };
})();
