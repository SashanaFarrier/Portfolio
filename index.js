const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeIcon = document.querySelector(".close-icon");
const navigation = document.querySelector(".navigation");
const navigationUL = navigation.querySelector("ul");

const tl = gsap.timeline({
  defaults: { duration: 1, ease: Elastic.easeOut.config(1, 0.3) },
});

hamburgerMenu.addEventListener("click", function (e) {
  if (e.target.closest(".hamburger-icon")) {
    e.target.closest(".hamburger-icon").classList.toggle("hidden");
    navigationUL.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");

    tl.to(navigation, {
      duration: 0.25,
      height: "80vh",
    })
      .to(navigationUL, { opacity: 1, y: 80 }, "+=1")
      .to(".nav-link", { stagger: 0.3, y: 30, fontSize: "1.5rem" });
  } else if (e.target.closest(".close-icon")) {
    e.target.closest(".close-icon").classList.toggle("hidden");
    navigationUL.classList.toggle("hidden");
    closeIcon.classList.add("hidden");
    hamburgerIcon.classList.toggle("hidden");

    tl.to(navigation, { duration: 0.25, height: 0 }, "-=1").to(navigationUL, {
      opacity: 0,
    });
  }
});
