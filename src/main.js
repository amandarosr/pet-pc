import "./style.css";

const dogBtn = document.querySelector('#dog');
const catBtn = document.querySelector('#cat');
const surpriseBtn = document.querySelector('#surprise');
const text = document.querySelector('#placeholder');
const img = document.querySelector('#animal-pic');

dogBtn.addEventListener('dblclick', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
        const { message } = data;
        img.style.display = 'inline-block'
        img.src = message;
        text.style.display = 'none';
    })
})

catBtn.addEventListener('dblclick', () => {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json())
    .then((data) => {
      const { url } = data[0];
      img.style.display = 'inline-block'
      img.src = url;
      text.style.display = 'none';
      console.log(url);
      
    })
  })

surpriseBtn.addEventListener('dblclick', () => {
  fetch('https://randomfox.ca/floof/?ref=public_apis&utm_medium=website')
  .then((response) => response.json())
  .then((data) => {
    const { image } = data;
    img.style.display = 'inline-block'  
    img.src = image;
    text.style.display = 'none';
    
  });
});