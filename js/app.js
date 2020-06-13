const menuBar = document.querySelector(".menu-bar"),
  bar1 = document.querySelector(".bar-1"),
  bar2 = document.querySelector(".bar-2"),
  logo = document.querySelector(".logo h1");
nav = document.querySelector("nav");

//   menu bar
if (window.innerWidth <= 600) {
  const tlMenu = gsap.timeline(
    { paused: true },
    {
      defaults: { duration: 1, ease: "Expo.easeInOut" },
    }
  );
  tlMenu
    .to(".bar-1", {
      rotate: "45deg",
      background: "#f0f0f0",
      x: "4px",
    })
    .to(".bar-2", {
      rotate: "-45deg",
      y: "-7px",
      x: "3px",
      background: "#f0f0f0",
      delay: -0.5,
    })
    .to("nav", {
      clipPath: "circle(151.1% at 93% 7%)",
      delay: -1,
    })
    .from("nav ul li", {
      y: 10,
      opacity: 0,
      stagger: 0.2,
    });

  tlMenu.reverse();

  menuBar.addEventListener("click", () => {
    tlMenu.reversed(!tlMenu.reversed());
  });
}

// gsap

const tl = gsap.timeline({
  defaults: { duration: 1, ease: "Expo.easeInOut" },
});

tl.to(".intro-div-gsap", {
  height: "0vh",
  delay: 0.3,
})
  .from(".landing-page-image", {
    width: "0%",
    ease: "power1.out",
    delay: 0.3,
  })
  .from("nav ul li", {
    y: -10,
    opacity: 0,
    stagger: 0.2,
  });
// -------------------------------------
gsap.from(CSSRulePlugin.getRule(".home .landing-page-content::before"), 1, {
  width: "100%",
  delay: 1,
});

gsap.from(".logo", {
  y: -10,
  opacity: 0,
  delay: 1,
});

gsap.from("footer .social-media li", 1, {
  opacity: 0,
  stagger: 0.3,
  delay: 1.2,
});

gsap.from("footer .icons-social li", 1, {
  opacity: 0,
  stagger: 0.3,
  delay: 1.2,
});

gsap.from(".copyright", {
  opacity: 0,
  delay: 2,
});
