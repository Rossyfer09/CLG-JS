const randomButton = document.getElementById('randomButton');
const imgEncanto = document.getElementById('imgEncanto');
const images = ["/image/2.jpg","/image/3.jpg","/image/4.jpg","/image/5.jpg",];

// Add click event listener to the button
randomButton.addEventListener('click', randompic);
function randompic () {
    // Get a random image from the images array
    let randomIndex = Math.floor(Math.random() * images.length);
   
// Get an image at the randomindex
   selectedImage =images[randomIndex]

   //display the image
   //document.getElementById('imgEncanto').src = './image/${selectedImage}'
   imgEncanto.innerHTML = `<img src='${selectedImage}' alt="encanto's pic"/>`
};