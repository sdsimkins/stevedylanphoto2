const burger = document.querySelector(".burger");
const dropDown = document.querySelector(".drop-down");
const mobileNav = document.querySelector(".mobile-nav");

burger.addEventListener("click", ()=> {
    //Toggle Nav
    dropDown.classList.toggle("active");
    mobileNav.classList.toggle("active");
    //Burger Animation
    burger.classList.toggle("toggle");
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".mobile-nav").style.top = "0";
    } else {
        document.querySelector(".mobile-nav").style.top = "-12vh";
    }
    prevScrollpos = currentScrollPos;
    }
