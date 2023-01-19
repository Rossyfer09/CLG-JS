//get random pic of my dog from a local folder
const randomButton = document.getElementById('randomButton');
const imgEncanto = document.getElementById('imgEncanto');
const images = ["/image/1.jpg","/image/2.jpg","/image/3.jpg","/image/4.jpg","/image/5.jpg","/image/6.jpg","/image/7.jpg","/image/8.jpg","/image/9.jpg","/image/10.jpg","/image/11.jpg","/image/12.jpg","/image/13.jpg","/image/14.jpg","/image/15.jpg","/image/16.jpg","/image/17.jpg","/image/18.jpg","/image/19.jpg","/image/20.jpg","/image/21.jpg","/image/22.jpg","/image/23.jpg","/image/24.jpg","/image/25.jpg","/image/26.jpg","/image/27.jpg","/image/28.jpg","/image/29.jpg","/image/30.jpg","/image/31.jpg","/image/32.jpg","/image/33.jpg"];

// Add click event listener to the button
randomButton.addEventListener('click', randompic);
function randompic () {
    // Get a random image from the images array
    let randomIndex = Math.floor(Math.random() * images.length);
   
// Get an image at the randomindex
   selectedImage =images[randomIndex]

   //display the image
   imgEncanto.innerHTML = `<img src='${selectedImage}' alt="encanto's pic"/>`
};

//fetch dogs pic from //dog.ceo/dog-api

const dogpics =document.getElementById('dogpics');
const randomdogpic = document.getElementById('randomdogpic');
const dogbreed = document.getElementById('dogbreed')

randomdogpic.addEventListener('click',getRandompic);
function getRandompic() {
	fetch("https://dog.ceo/api/breeds/image/random")
		.then(res => res.json())
		.then(data => {
           console.log(data);
    const dogbreedname = data.message.split("/")[4];
    dogpics.innerHTML = `<img src="${data.message}">`;
    dogbreed.innerHTML =dogbreedname;
      
      });
    };