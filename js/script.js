window.onload = () => {
  let leftMenu = document.querySelector(".left_menu");
  let buttonFields = document.querySelectorAll(".button_field");
  let showMoreInfo = document.querySelector(".show_more");
  let showLessInfo = document.querySelector(".show_less");
  let logo = document.querySelector(".logo");
  let spans = document.querySelectorAll(".spans");
  let toExpandButtons = document.querySelector(".expand_collapse_menu");
  var accordion = document.getElementsByClassName("accordion");
  let accPanel = document.querySelectorAll(".panel");
  var i;

  // This function expands the panel
  function showMore() {
    leftMenu.style.width = "300px";
    showLessInfo.style.display = "block";
    showMoreInfo.style.display = "none";
    buttonFields.forEach((button) => (button.style.display = "flex"));
    buttonFields.forEach((button) => (button.style.height = "35px"));
    spans.forEach((span) => (span.style.display = "inline"));
  }

  // This function collapses the navbar
  function showLess() {
    leftMenu.style.width = "50px";
    showLessInfo.style.display = "none";
    showMoreInfo.style.display = "block";
    accPanel.forEach((accpanel) => (accpanel.style.display = "none"));
    buttonFields.forEach((button) => (button.style.display = "block"));
    spans.forEach((span) => (span.style.display = "none"));
  }

  showMoreInfo.addEventListener("click", showMore);
  showLessInfo.addEventListener("click", showLess);


  for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      // Toggle between adding and removing the "active" class, to highlight the button that controls the panel
      this.classList.toggle("active");

      // Toggle between hiding and showing the active panel
      if (leftMenu.style.width === "300px") {
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      }
    });
    }
  
};
