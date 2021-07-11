const images = ["bg_0.jpg", "bg_1.jpg", "bg_2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `src/${chosenImage}`;
document.body.appendChild(bgImage);