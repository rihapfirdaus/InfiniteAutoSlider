// add the name of each image title here
const imageNames = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const sliderItems = imageNames.concat(imageNames);
const slider = document.getElementById("slide-track");

sliderItems.forEach((sliderItem) => {
  const img = document.createElement("img");
  img.src = "./assets/" + sliderItem; //path to your folder image
  img.className = "slide-item";
  slider.appendChild(img);
});
