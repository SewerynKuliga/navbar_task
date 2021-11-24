window.onload = () => {
  let leftMenu = document.querySelector(".left_menu");
  let buttonFields = document.querySelectorAll(".button_field");
  let showMoreInfo = document.querySelector(".show_more");
  let showLessInfo = document.querySelector(".show_less");
  let logo = document.querySelector(".logo");
  let spans = document.querySelectorAll(".spans");
  let toExpandButtons = document.querySelector(".expand_collapse_menu");

  showLessInfo.style.display = "none";
  toExpandButtons.style.display = "flex";
  function showMore() {
    leftMenu.style.width = "200px";
    showLessInfo.style.display = "block";
    showMoreInfo.style.display = "none";
    logo.style.just;
    buttonFields.forEach((button) => (button.style.display = "flex"));
    buttonFields.forEach((button) => (button.style.height = "35px"));
    spans.forEach((span) => (span.style.display = "inline"));
  }
  function showLess() {
    leftMenu.style.width = "50px";
    showLessInfo.style.display = "none";
    showMoreInfo.style.display = "block";
    buttonFields.forEach((button) => (button.style.display = "block"));
    spans.forEach((span) => (span.style.display = "none"));
  }

  showMoreInfo.addEventListener("click", showMore);
  showLessInfo.addEventListener("click", showLess);
};
