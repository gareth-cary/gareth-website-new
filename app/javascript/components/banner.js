
import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: [" Hi! Looking for a Web Developer or Web Designer?", "You've come to the right place.", "Get in touch today by following the link below.", "We look forward to hearing from you!" ],
    typeSpeed: 60,
    loop: false
  });
}

export { loadDynamicBannerText };
