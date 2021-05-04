// In this JS file I add functionality to the gallery page with images. 

// To start I declare some variables and grab elements of the page 
const modal = document.querySelector(".modal"); // the modal is the dark grey transparent background that appears when you click on an image
const previews = document.querySelectorAll(".gallery img"); // the images 
const original = document.querySelector(".full-img"); // selects the particular full size image if you choose to do so 
const caption = document.querySelector(".caption"); // selects the caption for the photos 

// To start I run a forEach loop that will apply these actions to every image preview 
previews.forEach(preview => {
    preview.addEventListener("click", () => { // here I add an event listener for when someone clicks on an image, then I run the function 
        modal.classList.add("open"); // I add a class of "open" to the modal which lets us see the dark gray background 
        original.classList.add("open"); // I also add a class of open to the full image 

        const originalSrc = preview.getAttribute("data-original"); // this functionality can let us determine what image we see
        original.src = `./img-full/${originalSrc}`; // this is a continuation of the previous line that changes the source of the image file for display 
        const altText = preview.alt; // declares variable for caption test 
        caption.textContent = altText; // adds caption to image 
    });
});


// This lets us close the image if we click anywhere outside the image on the modal 
modal.addEventListener("click", (e)=> { // we do this by adding an event listener 
    if(e.target.classList.contains("modal")){ //we run an "if" statement that says if the object we click on contains a class of "modal"... 
        modal.classList.remove("open"); // Then we want to remove the class of open 
        original.src = null; // set our image source to null so it can be updated to something different in the future 
        original.classList.remove("open"); // remove the image class of open to make it go away 
    }
});


// OLD CODE

// const modal = document.querySelector(".modal");
// const previews = document.querySelectorAll(".gallery img");
// const original = document.querySelector(".full-img");
// const caption = document.querySelector(".caption");

// previews.forEach(preview => {
//     preview.addEventListener("click", () => {
//         modal.classList.add("open");
//         original.classList.add("open");

//         const originalSrc = preview.src;
//         original.src = originalSrc
//         const altText = preview.alt;
//         caption.textContent = altText;
//     });
// });

// modal.addEventListener("click", (e)=> {
//     if(e.target.classList.contains("modal")){
//         modal.classList.remove("open");
//         original.src = null;
//         original.classList.remove("open");
//     }
// });