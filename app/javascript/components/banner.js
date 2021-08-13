import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Enter your dreamworld"],
    typeSpeed: 100,
    loop: true
  });
}

export { loadDynamicBannerText };
