if (sessionStorage.getItem("loaded") === "true") {
  sessionStorage.removeItem("loaded");
  window.location.href = "index.html";
} else {
  sessionStorage.setItem("loaded", "true");
}
const textEndPosition = document.querySelector(".team .card-body p.card-text").getBoundingClientRect().bottom;
window.onload = function () {
  const tl = gsap.timeline();

  tl.fromTo(
    "nav",
    {
      y: -100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    }
  )

    .fromTo(
      ".text-warning",
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.5"
    )

    .fromTo(
      "nav ul",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.25"
    )
    .fromTo(
      "nav ul li",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
        ease: "power2.out",
      }
    );
};

gsap.registerPlugin(ScrollTrigger);
gsap.from(".imgs", {
  opacity: 0,
  y: 20,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".imgs",
    start: "top 50%", // when the top of the about section hits 80% from the top of the viewport
    toggleActions: "play none none reverse", // play animation on enter, reverse on leave
  },
});

gsap.from(".about-text", {
  opacity: 0,
  y: 20,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".imgs",
    start: "top 50%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".darkanime", {
  opacity: 0,
  rotation: 360, // Rotate 360 degrees
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".darkanime", // Start the animation when the .darkanime element enters the viewport
    start: "top 50%", // when the top of the .darkanime element hits 80% from the top of the viewport
    toggleActions: "play none none reverse", // play animation on enter, reverse on leave
  },
});
gsap.from(
  ".portfolio .card-body >h3, .portfolio .card-body > p, .portfolio .card-body > button",
  {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".portfolio .card-tile", // Start the animation when the .portfolio element enters the viewport
      start: "top 80%", // when the top of the .portfolio element hits 80% from the top of the viewport
      toggleActions: "play none none reverse", // play animation on enter, reverse on leave
    },
  }
);

gsap.from(".team .card-body p.socials", {
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".team .card-body p.card-text", // Start the animation when the .portfolio element enters the viewport
    start: "top 80%", // when the top of the .portfolio element hits 80% from the top of the viewport
    end: `${textEndPosition}px`, // Trigger at the estimated end position of the text
    toggleActions: "play none none reverse", // play animation on enter, reverse on leave
  },
});
