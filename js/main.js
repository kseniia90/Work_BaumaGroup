"use strict";

// show menu, dont scroll body while menu is open, close the menu if click happen outside menu
const menuIcon = document.querySelector(".menu__icon");
const menuButton = document.querySelector(".catalog-btn");

// Burger-menu: show menu, dont scroll body while menu is open, close the menu if click outside menu
const burgerMenuIcon = document.querySelector(".burger-menu__icon");
const burgerMenuBody = document.querySelector(".header__nav");

document.addEventListener("click", function(event){
  if(event.target.closest('.burger-menu-btn')){
    document.body.classList.toggle("lock");
    burgerMenuBody.classList.toggle("_active");
    burgerMenuIcon.classList.toggle("_active");
  }
})

// Get all the dropdown from document

document.querySelectorAll(".dropdown-link").forEach(dropDownFunc);

// Dropdown Open and Close function
function dropDownFunc(dropDown) {
  if (dropDown.classList.contains("hover-dropdown") === true) {
    dropDown.onmouseover = dropDown.onmouseout = dropdownHover;

    function dropdownHover(e) {
      if (e.type == "mouseover" && !!this.nextElementSibling) {
        // Close the opend dropdown
        closeDropdown();

        // add the open and active class(Opening the DropDown)
        this.parentElement.classList.add("dropdown-open");
        this.nextElementSibling.classList.add("dropdown-active");
        document.querySelector(".back-btn").classList.add("_active");
      }
    }
  }
}

// Listen to the doc click
window.addEventListener("click", function (e) {
  // Close the menu if click happen outside menu
  if (e.target.closest(".header__menu__list") === null) {
    document.querySelector(".back-btn").classList.remove("_active");
    // Close the opend dropdown
    closeDropdown();
  }
});

// Close the openend Dropdowns
function closeDropdown() {
  // remove the open and active class from other opened Dropdown (Closing the opend DropDown)
  document
    .querySelectorAll(".header__menu__list")
    .forEach(function (container) {
      container.classList.remove("dropdown-open");
    });

  document.querySelectorAll(".header__submenu__list").forEach(function (menu) {
    menu.classList.remove("dropdown-active");
  });

  document.querySelector(".header__nav").style.paddingBottom = null;
  document.querySelector(".header__nav").style.marginBottom = null;
}

// close the dropdown on mouse out from the dropdown list
document
  .querySelectorAll(".header__submenu__list")
  .forEach(function (dropDownList) {
    // close the dropdown after user leave the list
    dropDownList.onmouseleave = closeDropdown;
  });

$(function () {
  // slider
  var owl = $(".owl-carousel").owlCarousel({
    dots: false,
    items: 1,
  });
  $(".next-slide").click(function () {
    console.log('next');
    owl.trigger("next.owl.carousel");
  });
  $(".prev-slide").click(function () {
    console.log('prev');
    owl.trigger("prev.owl.carousel");
  });

  // dropdown submenu
  $(".has-submenu > a").click(function(e){
    e.preventDefault()
    if(!$(this).siblings(".header__second-submenu__list").hasClass("open")){
      $(".has-submenu > a").removeClass("gray");
      $(this).addClass("gray");
      $(".header__second-submenu__list").removeClass("open").slideUp();
      $(this).siblings(".header__second-submenu__list").addClass("open").slideDown();
    } else {
      $(this).siblings(".header__second-submenu__list").removeClass("open").slideUp();
      $(this).removeClass("gray");
    }
  })
});






