const burger = document.querySelector(".burger");
const dropDown = document.querySelector(".drop-down");

burger.addEventListener("click", ()=> {
    //Toggle Nav
    dropDown.classList.toggle("active");
    //Burger Animation
    burger.classList.toggle("toggle");
});
