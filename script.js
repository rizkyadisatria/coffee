const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-left");
      entry.target.classList.add("show-right");
      entry.target.classList.add("show-up");
      entry.target.classList.add("show-down");
    }
    // else {
    //   entry.target.classList.remove("show-left");
    //   entry.target.classList.remove("show-right");
    // }
  });
});
const hiddenElementLeft = document.querySelectorAll(".hidden-left");
hiddenElementLeft.forEach((el) => observer.observe(el));
const hiddenElementRight = document.querySelectorAll(".hidden-right");
hiddenElementRight.forEach((el) => observer.observe(el));
const hiddenElementUp = document.querySelectorAll(".hidden-up");
hiddenElementUp.forEach((el) => observer.observe(el));
const hiddenElementDown = document.querySelectorAll(".hidden-down");
hiddenElementDown.forEach((el) => observer.observe(el));
