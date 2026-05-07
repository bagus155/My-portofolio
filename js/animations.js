// ─────────────────────────────────────────────────────────
// animations.js — Intersection Observer · Staggered reveals
// ─────────────────────────────────────────────────────────

/**
 * Observes all elements with class `.fade-up` and adds
 * `.is-visible` when they enter the viewport.
 * Elements within the same section are staggered
 * automatically via CSS transition-delay classes.
 */
export function initScrollAnimations() {
  const targets = document.querySelectorAll('.fade-up');

  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Unobserve after reveal — no reverse animation
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  targets.forEach(el => observer.observe(el));
}

/**
 * Auto-assigns stagger delay classes to sibling .fade-up
 * elements within the same parent container.
 * Runs after DOM injection from content.js.
 */
export function assignStaggerDelays() {
  const parents = document.querySelectorAll(
    '.expertise-grid, .projects-grid, .flow-container, .about-grid, .tech-stack'
  );

  parents.forEach(parent => {
    const children = parent.querySelectorAll('.fade-up');
    children.forEach((child, i) => {
      const delayClass = `delay-${Math.min(i + 1, 6)}`;
      if (!child.classList.contains(delayClass)) {
        child.classList.add(delayClass);
      }
    });
  });
}

/**
 * Subtle parallax on hero blobs — mouse-follow effect.
 * Lightweight, no library required.
 */
export function initHeroParallax() {
  const blobs = document.querySelectorAll('.hero-blob');
  if (!blobs.length) return;

  let ticking = false;

  document.addEventListener('mousemove', (e) => {
    if (ticking) return;

    requestAnimationFrame(() => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;

      blobs.forEach((blob, i) => {
        const factor = (i + 1) * 8;
        blob.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
      });

      ticking = false;
    });

    ticking = true;
  });
}

/**
 * Nav background intensifies on scroll
 */
export function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.style.boxShadow = '0 1px 24px rgba(45,45,45,0.06)';
    } else {
      nav.style.boxShadow = 'none';
    }
  }, { passive: true });
}