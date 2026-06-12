const Render = (() => {
  function init() {
    renderSkills();
    renderProjects();
  }

  function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid || !PORTFOLIO_DATA.skills) return;

    grid.innerHTML = PORTFOLIO_DATA.skills.map(category => `
      <article class="skill-category reveal">
        <h3 class="skill-category__title">${category.title}</h3>
        <div class="skill-category__items">
          ${category.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
        </div>
      </article>
    `).join('');
  }

  function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid || !PORTFOLIO_DATA.projects) return;

    grid.innerHTML = PORTFOLIO_DATA.projects.map(project => `
      <article class="project-card reveal">
        <div class="project-card__header">
          <h3 class="project-card__title">${project.name}</h3>
          <span class="project-card__status">En producción</span>
        </div>
        <p class="project-card__desc">${project.description}</p>
        <p class="project-card__deploy">${project.deploy}</p>
        <div class="project-card__tags">
          ${project.tags.map(tag => `<span class="project-card__tag">${tag}</span>`).join('')}
        </div>
        <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-card__link">
          Ver proyecto →
        </a>
      </article>
    `).join('');
  }

  return { init };
})();
