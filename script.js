const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  mainNav.classList.toggle("active");
});
document.addEventListener("click", (e) => {
  if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
    menuToggle.classList.remove("active");
    mainNav.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const loverItems = document.querySelectorAll(".lovers_item");

  function closeAllPanels() {
    loverItems.forEach((item) => {
      item.classList.remove("active");
      item.nextElementSibling.classList.remove("active");
      item.querySelector("i").className = "fa-solid fa-plus";
    });
  }

  loverItems.forEach((item) => {
    item.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      closeAllPanels();

      if (!isActive) {
        item.classList.add("active");
        item.nextElementSibling.classList.add("active");
        item.querySelector("i").className = "fa-solid fa-minus";
      }
    });
  });
});