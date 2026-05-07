import { site } from '../data/siteData.js';

const ArrowIcon = `
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="2.5" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>`;

export function renderProjects() {
  const el = document.getElementById('projects');
  const { projects } = site;

  el.innerHTML = `
    <div class="section-wrapper">
      <p class="section-label fade-up">${projects.eyebrow}</p>
      <h2 class="section-title fade-up delay-1">${projects.title}</h2>

      <div class="projects-grid">
        ${projects.items.map((proj, i) => `
          <a href="${proj.link || '#'}" target="_blank" rel="noopener noreferrer"
             class="project-card-link fade-up delay-${Math.min(i + 1, 4)}">
            <article class="project-card">
              <div class="project-accent" style="background:${proj.accent};"
                   aria-hidden="true"></div>
              <p class="project-type">${proj.type}</p>
              <h3>${proj.title}</h3>
              <p>${proj.desc}</p>
              <div class="project-tags">
                ${proj.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
              </div>
              <span class="project-arrow" aria-hidden="true">${ArrowIcon}</span>
            </article>
          </a>
        `).join('')}
      </div>
    </div>
    <div class="divider"></div>
  `;
}