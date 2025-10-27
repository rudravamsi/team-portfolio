document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  header.style.transition = "background 1s";
  header.addEventListener("mouseover", () => header.style.background = "#005fa3");
  header.addEventListener("mouseout", () => header.style.background = "#0078d7");
});
