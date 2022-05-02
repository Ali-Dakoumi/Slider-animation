var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");
var slide = Array.from(document.querySelectorAll(".container .slide"));
var right = document.querySelector(".rightcontainer");

var i = 0;
function hide() {
  slide.forEach((element) => {
    gsap.set(slide, { autoAlpha: 0 });
  });
}

function enter() {
  var tl = new gsap.timeline();
  tl.fromTo(
    ".btn .next",
    0.4,
    {
      autoAlpha: 0,
      x: 50,
    },
    {
      ease: Back.easeOut,
      autoAlpha: 1,
      x: 0,
    }
  ),
    tl.fromTo(
      ".btn .prev",
      0.4,
      {
        autoAlpha: 0,
        x: -50,
      },
      {
        ease: Back.easeOut,
        autoAlpha: 1,
        x: 0,
      },
      "-=0.4"
    );

  tl.to(
    ".leftcontainer",
    0.5,
    {
      width: "700px",
      ease: Power1.easeOut,
    },
    "-=0.2"
  );

  tl.to(
    ".rightcontainer",
    0.6,
    {
      width: "100%",
      ease: Power1.easeOut,
    },
    "-=0.2"
  );
  tl.to(
    ".img",
    0.6,
    {
      width: "100%",
      ease: Power1.easeOut,
    },
    "-=0.2"
  );
  tl.to(
    ".rightcontainer",
    0.6,
    {
      right: "0%",
      left: "27%",
      top: "18%",
      height: 650,
      ease: Power1.easeOut,
    },
    "-=0.2"
  );
  tl.fromTo(
    ".pixi",
    0.4,
    {
      y: 300,
      ease: Power1.easeOut,
    },
    {
      y: 0,
    },
    "-=0.2"
  );
  return tl;
}

enter();

function leave() {
  var tl = new TimelineLite();
  tl.fromTo(
    ".btn .next",
    0.4,
    {
      autoAlpha: 1,
      x: 0,
    },
    {
      ease: Back.easeIn,
      autoAlpha: 0,
      x: 50,
    }
  ),
    tl.fromTo(
      ".btn .prev",
      0.4,
      {
        autoAlpha: 1,
        x: 0,
      },
      {
        ease: Back.easeIn,
        autoAlpha: 0,
        x: -50,
      },
      "-=0.4"
    );
  tl.to(".pixi", 0.3, {
    y: 300,
    ease: Power1.easeIn,
  });
  tl.to(".leftcontainer", 0.4, {
    width: 0,
    ease: Power1.easeIn,
  });
  tl.to(
    ".img",
    0.5,
    {
      width: "0",
      ease: Power1.easeIn,
    },
    "-=0.3"
  );
  tl.to(
    ".rightcontainer",
    0.4,
    {
      right: "8%",
      left: "12%",
      top: "40%",
      height: 300,
      ease: Power1.easeIn,
    },
    "-=0.2"
  );
  tl.to(
    ".rightcontainer",
    0.6,
    {
      width: 0,
      ease: Power1.easeIn,
    },
    "-=0.3"
  );
  return tl;
}

hide();
gsap.set(slide[i], { autoAlpha: 1 });
var pic = Array.from(document.querySelectorAll(".slide .rightcontainer .img"));

prevBtn.onclick = function () {
  leave();
  setTimeout(() => {
    hide();
    if (i <= 0) {
      i = 3;
    }
    i--;
    gsap.set(slide[i], { autoAlpha: 1 });
    enter();
  }, 2400);
};

nextBtn.onclick = function () {
  leave();
  setTimeout(() => {
    hide();
    if (i >= slide.length - 1) {
      i = -1;
    }
    i++;
    gsap.set(slide[i], { autoAlpha: 1 });
    enter();
  }, 2400);
};
