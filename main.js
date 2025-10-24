import "./style.css";
import Swal from "sweetalert2";

const dogBtn = document.querySelector("#dog");
const catBtn = document.querySelector("#cat");
const surpriseBtn = document.querySelector("#surprise");
const dogDiv = document.querySelector("#dog-div");
const imgDog = document.querySelector("#dog-pic");
const catDiv = document.querySelector("#cat-div");
const imgCat = document.querySelector("#cat-pic");
const foxDiv = document.querySelector("#fox-div");
const imgFox = document.querySelector("#fox-pic");
const dogClose = document.querySelector("#dog-close");
const catClose = document.querySelector("#cat-close");
const foxClose = document.querySelector("#fox-close");
const adultTask = document.querySelector("#adult-task");

dogBtn.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      const { message } = data;
      dogDiv.style.animation = "scale-up-bottom-left 0.4s"
      dogDiv.style.display = "inline-block";
      imgDog.src = message;
    });
});

catBtn.addEventListener("click", () => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      const { url } = data[0];
      catDiv.style.animation = "scale-up-bottom-left 0.4s"
      catDiv.style.display = "inline-block";
      imgCat.src = url;
    });
});

surpriseBtn.addEventListener("click", () => {
  fetch("https://randomfox.ca/floof/?ref=public_apis&utm_medium=website")
    .then((response) => response.json())
    .then((data) => {
      const { image } = data;
      foxDiv.style.animation = "scale-up-bottom-left 0.4s"
      foxDiv.style.display = "inline-block";
      imgFox.src = image;
    });
});

dogClose.addEventListener("click", () => {
  dogDiv.style.display = "none";
});

catClose.addEventListener("click", () => {
  catDiv.style.display = "none";
});

foxClose.addEventListener("click", () => {
  foxDiv.style.display = "none";
});

adultTask.addEventListener("click", () => {
  Swal.fire({
    title: "Not right now... Look at some cute pets!",
    width: "350px",
  });
});