import "./style.css";

const dogBtn = document.querySelector('#dog');
const catBtn = document.querySelector('#cat');
const surpriseBtn = document.querySelector('#surprise');
const text = document.querySelector('#placeholder');
const image = document.querySelector('img');

dogBtn.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
        const { message } = data;
        image.style.display = 'inline-block'
        image.src = message;
        text.style.display = 'none';
    })
})

catBtn.addEventListener('click', () => {
  fetch('https://aws.random.cat/meow')
    .then((response) => response.json())
    .then((data) => {
      const { file } = data;
      image.style.display = 'inline-block'
      image.src = file;
      text.style.display = 'none';
    })
  })

surpriseBtn.addEventListener('click', () => {
  Promise.any([fetch('https://dog.ceo/api/breeds/image/random'),
  fetch('https://aws.random.cat/meow')])
  .then((response) => response.json())
  .then((data) => {
    const petURL = (data.file || data.message);
    image.style.display = 'inline-block'  
    image.src = petURL;
    text.style.display = 'none';
  });
});