const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

function changeBG(){
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    bgImage.src = `img/${chosenImage}`;
    console.log(chosenImage)
}
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.className = "image"
document.body.appendChild(bgImage);

let bgI = document.querySelector('.image')

bgI.addEventListener("click", changeBG)
