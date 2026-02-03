const gsap = typeof window !== "undefined" ? window.gsap : null;
const ScrollTrigger = typeof window !== "undefined" ? window.ScrollTrigger : null;

if (gsap && ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
