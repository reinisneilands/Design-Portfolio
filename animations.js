(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var groups = [
    { sel: '.hero__heading',             delay: 0 },
    { sel: '.hero__subheading',          delay: 0.12 },
    { sel: '.hero__actions',             delay: 0.22 },
    { sel: '.works__header',             delay: 0 },
    { sel: '.work-card',                 delay: 'auto' },
    { sel: '.experience__header',        delay: 0 },
    { sel: '.experience__row',           delay: 'auto' },
    { sel: '.about__header',             delay: 0 },
    { sel: '.about__text',               delay: 0 },
    { sel: '.about__card-wrap',          delay: 0.1 },
    { sel: '.designops__header',         delay: 0 },
    { sel: '.designops__image-wrap',     delay: 0.1 },
    { sel: '.footer__card',              delay: 0 },
    { sel: '.project-hero__titles',      delay: 0 },
    { sel: '.project-hero__badge',       delay: 0.12 },
    { sel: '.project-hero__image',       delay: 0.2 },
    { sel: '.project-summary__question', delay: 0 },
    { sel: '.project-summary__overview', delay: 0 },
    { sel: '.project-summary__notice',   delay: 0.05 },
    { sel: '.case-study__section',       delay: 0 },
  ];

  var seen = new Set();

  groups.forEach(function (g) {
    document.querySelectorAll(g.sel).forEach(function (el, i) {
      if (seen.has(el)) return;
      seen.add(el);
      el.classList.add('anim');
      var d = g.delay === 'auto' ? i * 0.1 : g.delay;
      if (d) el.style.transitionDelay = d + 's';
    });
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('anim--visible');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

  document.querySelectorAll('.anim').forEach(function (el) {
    io.observe(el);
  });
})();
