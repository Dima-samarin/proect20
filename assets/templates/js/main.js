const smoothScroll = (target, duration) => {
  const topOffset = document.querySelector('.header').offsetHeight;
  const targetPosition = target.getBoundingClientRect().top - topOffset;
  let startPosition = window.pageYOffset;
  let startTime = null;
  const animation = currentTime => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animation);
};

const scroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const target = document.querySelector(href);
      smoothScroll(target, 1500);
    });
  });
};

scroll();
const burger = document?.querySelector('.burger');
const nav = document?.querySelector('.nav');
const navItems = nav?.querySelectorAll('a');
const body = document.body;
burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger?.classList.toggle('burger--active');
  nav.classList.toggle('nav--visible')
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    burger?.classList.remove('burger--active');
    nav.classList.remove('nav--visible')
  })
})
