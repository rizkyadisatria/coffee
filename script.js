const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.add("show-up");
      entry.target.classList.add("show-down");
    }
    // else {
    //   entry.target.classList.remove("show-left");
    //   entry.target.classList.remove("show-right");
    // }
  });
});
const hiddenElementLeft = document.querySelectorAll(".hidden");
hiddenElementLeft.forEach((el) => observer.observe(el));
const hiddenElementUp = document.querySelectorAll(".hidden-up");
hiddenElementUp.forEach((el) => observer.observe(el));
const hiddenElementDown = document.querySelectorAll(".hidden-down");
hiddenElementDown.forEach((el) => observer.observe(el));

if (window.location.pathname === "/help.html") {
  document.querySelector(".nav-contact").style.borderBottom =
    "thick solid #EC9A29";
} else if (window.location.pathname === "/homebase.html") {
  document.querySelector(".nav-homebase").style.borderBottom =
    "thick solid #EC9A29";
} else if (window.location.pathname === "/menu.html") {
  document.querySelector(".nav-menu").style.borderBottom =
    "thick solid #EC9A29";
}

const footer = document.querySelector(".footer");
const footerUrl = document.querySelectorAll(".footer-url");

footerUrl.forEach((doc) => {
  const arrow = doc.querySelector(".arrow");
  const footerList = doc.querySelector(".footer-list");

  arrow.addEventListener("click", () => {
    arrow.classList.toggle("open");

    if (arrow.classList.contains("open")) {
      let style = `visibility: visible; position: relative;`;
      arrow.style.transform = "rotate(90deg)";
      footerList.style = style;
    } else {
      let style = `visibility: hidden; position: fixed;`;
      arrow.style.transform = "rotate(180deg)";
      footerList.style = style;
    }
  });
});
