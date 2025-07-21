Array.from(document.querySelector(".tabs").children).forEach((tab) => {
  tab.addEventListener("click", () => {
    const pages = document.querySelectorAll(".page");
    pages.forEach((page) => {
      page.style.display = "none";
    });
    switch (tab.id) {
      case "firstTab":
        pages[0].style.display = "block";
        break;
      case "secondTab":
        pages[1].style.display = "block";
        break;
      case "thirdTab":
        pages[2].style.display = "block";
        break;
      case "fourthTab":
        pages[3].style.display = "block";
        break;
      default:
        pages[0].style.display = "block";
        break;
    }
  });
});
