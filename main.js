"use strict";



var menuNav = document.getElementById("menu_nav");

var menuTrigger = document.getElementById('menu_trigger');

function menuToggle() {
  if (menuNav.style.display === "flex") {
    menuNav.style.display = "none";
  } else {
    menuNav.style.display = "flex";
  }
  console.log("The menu has been toggled!");
}

function checkWindowSize() {
  if (window.innerWidth >= 600) {
    menuNav.style.display = "flex";
  }
}

menuTrigger.onclick = menuToggle;

window.onresize = checkWindowSize;




function openGraphic(evt, yearName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

  document.getElementById(yearName).style.display = "block";
  evt.currentTarget.className += " active";

}

  document.getElementById("defaultOpen").click();



function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
