const text = new SplitType("#text");

gsap.from(".char", {
  y: 100,
  stagger: 0.05,
  duration: 0.2,
  rotate: 25,
  ease: "back.out(1.7)",
  onComplete: function () {
    setTimeout(function () {
      window.location.href = "home.html";
    }, 1000);
  },
});

sessionStorage.removeItem("loaded");
