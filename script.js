gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll("section").forEach((section) => {
  gsap.fromTo(
    section,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom 50%",
        toggleActions: "play reverse play reverse",
      },
    }
  );
});
