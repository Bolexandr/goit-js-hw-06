function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const spanContent = body.querySelector('.color') ;
const btnChangeColor = body.querySelector('.change-color');

const addinColorToElements = () => {
const rndmColor = getRandomHexColor()
  spanContent.textContent = rndmColor
  body.style.backgroundColor = rndmColor

} 

btnChangeColor.addEventListener('click',addinColorToElements)