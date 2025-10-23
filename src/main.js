import "./style.css";
import "sweetalert2";

const dogBtn = document.querySelector("#dog");
const catBtn = document.querySelector("#cat");
const surpriseBtn = document.querySelector("#surprise");
const dogDiv = document.querySelector("#dog-div");
const imgDog = document.querySelector("#dog-pic");
const catDiv = document.querySelector("#cat-div");
const imgCat = document.querySelector("#cat-pic");
const foxDiv = document.querySelector("#fox-div");
const imgFox = document.querySelector("#fox-pic");
const adultTask = document.querySelector("#adult-task");

dogBtn.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      const { message } = data;
      dogDiv.style.display = "inline-block";
      imgDog.src = message;
    });
});

catBtn.addEventListener("click", () => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      const { url } = data[0];
      catDiv.style.display = "inline-block";
      imgCat.src = url;
    });
});

surpriseBtn.addEventListener("click", () => {
  fetch("https://randomfox.ca/floof/?ref=public_apis&utm_medium=website")
    .then((response) => response.json())
    .then((data) => {
      const { image } = data;
      foxDiv.style.display = "inline-block";
      imgFox.src = image;
    });

  adultTask.addEventListener("click", () => {
    alert("You clicked the button!");
  });
});
