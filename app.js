// This JS file is used for adding functionality to the mobile menu 
// and for making the nav bar dissapear when scrolling down, then reappear when scrolling up


// Here I establish variables that equal to elemrnts in the document, 
// like the three lines in the top right of the mobile menu (burger), 
// and the expanded mobile menu. These are done with query selectors by classes in the html elements 
const burger = document.querySelector(".burger");
const dropDown = document.querySelector(".drop-down");
const mobileNav = document.querySelector(".mobile-nav");


// Here I create event listens that wait for an action on the page, 
// in this case its clicking on the burger. When I click on the burger 
// I run a function that toggles classes on multiple elements. 
burger.addEventListener("click", ()=> {
    //Toggle Nav
    // Here I toggle a class of active to the mobile menu. 
    //The CSS file has particular rules that change the appearance of the page 
    dropDown.classList.toggle("active");
    mobileNav.classList.toggle("active");
    //Burger Animation
    // This where the burger turns into an x 
    burger.classList.toggle("toggle");
});


// In this section I mage the nav bar at the top go away when scrolling down, 
// then reappear when scrolling up. 

// First I establish a variable that gives me access to the window page Y axis offset 
var prevScrollpos = window.pageYOffset;
//Then I run something like an event listener, where 
// when someone scrolls on the window I run a function 
window.onscroll = function() {
    // In this function I declare another variable, the current position of
    // the scroll on the page 
    var currentScrollPos = window.pageYOffset;
    // Then we run an "if else" clause. 
    if (prevScrollpos > currentScrollPos) { // If the previous scroll position is greater than our current position... 
        document.querySelector(".mobile-nav").style.top = "0"; // then we run this change to the css style of the nav menu
    } else { // otherwise, if the opposite, which moves the nav menu up and out of the way 
        document.querySelector(".mobile-nav").style.top = "-12vh";
    }
    prevScrollpos = currentScrollPos; // then to help loop it we make the previosu scroll position equal our current scroll position 
    }
