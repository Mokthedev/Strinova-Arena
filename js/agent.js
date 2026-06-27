/* ═══════════════════════════════════════════════
   STRINOVA — AGENT PAGE SCRIPTS
   js/agent.js
═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Smooth entrance animations ── */
  const els = document.querySelectorAll(
    '.agent-name, .agent-title, .agent-tags, .agent-quote, .stats-grid, .ability, .syn-tag'
  );
  els.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`;
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 60);
  });

  /* ── Character art parallax on mouse move ── */
  const art = document.querySelector('.agent-art img');
  const left = document.querySelector('.agent-left');
  if (art && left) {
    left.addEventListener('mousemove', (e) => {
      const rect = left.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      art.style.transform = `translate(${dx * 10}px, ${dy * 6}px)`;
    });
    left.addEventListener('mouseleave', () => {
      art.style.transform = 'translate(0, 0)';
      art.style.transition = 'transform 0.6s ease';
    });
    left.addEventListener('mouseenter', () => {
      art.style.transition = 'transform 0.1s ease';
    });
  }

  /* ── Active ability highlight on click ── */
  document.querySelectorAll('.ability').forEach(ab => {
    ab.addEventListener('click', () => {
      document.querySelectorAll('.ability').forEach(a => a.classList.remove('active'));
      ab.classList.toggle('active');
    });
  });

});