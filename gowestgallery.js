const modal = document.querySelector(".modal"); // the modal is the dark grey transparent background that appears when you click on an image
const previews = document.querySelectorAll(".go-west-gallery img"); // the images 
const original = document.querySelector(".full-img"); // selects the particular full size image if you choose to do so 
const caption = document.querySelector(".caption"); // selects the caption for the photos 

// To start I run a forEach loop that will apply these actions to every image preview 
previews.forEach(preview => {
    preview.addEventListener("click", () => { // here I add an event listener for when someone clicks on an image, then I run the function 
        modal.classList.add("open"); // I add a class of "open" to the modal which lets us see the dark gray background 
        original.classList.add("open"); // I also add a class of open to the full image 

        const originalSrc = preview.src;
        original.src = originalSrc
        const altText = preview.alt;
        caption.textContent = altText;
    });
});


// This lets us close the image if we click anywhere outside the image on the modal 
modal.addEventListener("click", (e)=> { // we do this by adding an event listener 
    if(e.target.classList.contains("modal")){ //we run an "if" statement that says if the object we click on contains a class of "modal"... 
        modal.classList.remove("open"); // Then we want to remove the class of open 
        original.classList.remove("open"); // remove the image class of open to make it go away 
        original.src = null; // set our image source to null so it can be updated to something different in the future 
    }
});