function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку
// Створити, після чого рендериться колекція.Натисненням на 
// кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр -
//   число.Функція створює стільки < div >, скільки вказано в amount
//    і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим
//  і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. 
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//   у такий спосіб видаляючи всі створені елементи.

const divLinc = document.querySelector('#controls');
const divBoxesLink = document.querySelector('#boxes')
const inputLinc = divLinc.querySelector('[type="number"]');
const createBtn = divLinc.querySelector('[data-create]');
const remuveBtn = divLinc.querySelector('[data-destroy]');

// console.dir(divLinc)
// console.dir(inputLinc)
// console.dir(createBtn)
// console.dir(remuveBtn)

console.dir(divBoxesLink)

function createBoxes(amount) {
  let LongHtmlString = '';
  let  sizeValue = 30
  for (let i = 1; i <= amount; i += 1){
    LongHtmlString += `<div style="width:${sizeValue}px; height:${sizeValue}px; background-color:${getRandomHexColor()}"></div>`;
    sizeValue += 10
  }
  console.log(divBoxesLink)
   divBoxesLink.innerHTML = LongHtmlString
}

function destroyBoxes(){
divBoxesLink.innerHTML=''
}

function  createCallBack(){
  const countValue = inputLinc.valueAsNumber
  createBoxes(countValue)
}

function remuveCallBack () {
  destroyBoxes()
}

createBtn.addEventListener('click', createCallBack)
remuveBtn.addEventListener('click', remuveCallBack)
