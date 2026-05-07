// ─────────────────────────────────────────────────────────
// main.js — Orchestrator. Import sections, render, animate.
// ─────────────────────────────────────────────────────────

import { renderNav }       from './sections/nav.js';
import { renderHero }      from './sections/hero.js';
import { renderAbout }     from './sections/about.js';
import { renderExpertise } from './sections/expertise.js';
import { renderDataflow }  from './sections/dataflow.js';
import { renderProjects }  from './sections/projects.js';
import { renderContact }   from './sections/contact.js';
import { renderSocialBar, renderFooter } from './sections/footer.js';

import {
  initScrollAnimations,
  assignStaggerDelays,
  initHeroParallax,
  initNavScroll,
} from './animations.js';

// ── Render all sections in order ──────────────────────────
function renderAll() {
  renderNav();
  renderSocialBar();
  renderHero();
  renderAbout();
  renderExpertise();
  renderDataflow();
  renderProjects();
  renderContact();
  renderFooter();
}

// ── Boot ──────────────────────────────────────────────────
function init() {
  renderAll();
  assignStaggerDelays();
  requestAnimationFrame(initScrollAnimations);
  initHeroParallax();
  initNavScroll();
}

document.readyState === 'loading'
  ? document.addEventListener('DOMContentLoaded', init)
  : init();