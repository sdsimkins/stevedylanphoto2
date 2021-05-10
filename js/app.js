const burger = document.querySelector(".burger");
const dropDown = document.querySelector(".drop-down");
const mobileNav = document.querySelector(".mobile-nav");
const tl = new gsap.timeline();

burger.addEventListener("click", ()=> {
    animate();
    dropDown.classList.toggle("active");
    mobileNav.classList.toggle("active");
    burger.classList.toggle("toggle");
});

tl.fromTo(dropDown, {duration: 1.5, y:"-350vw"}, {duration: 0.75, y: "0vw"});
tl.reverse(-1);
tl.reversed(true);

function animate(){
    tl.reversed(!tl.reversed());
}

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
