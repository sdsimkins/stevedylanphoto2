const burger = document.querySelector(".burger");
const dropDown = document.querySelector(".drop-down");
const mobileNav = document.querySelector(".mobile-nav");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const tl = new gsap.timeline();

burger.addEventListener("click", ()=> {
    animate();
    dropDown.classList.toggle("active");
    mobileNav.classList.toggle("active");
});

tl.to(line1, {duration: 0.3, rotate: 45, y: 8}, "-=1");
tl.to(line2, {duration: 0.3, x: "-100%", opacity: 0}, "-=1");
tl.to(line3, {duration: 0.3, rotate: -45, y: -8}, "-=1");
tl.fromTo(dropDown, {duration: 0.75, y:"-350vw"}, {duration: 0.75, y: "0vw"}, "-=1");
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
