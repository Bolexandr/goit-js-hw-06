const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//////////Виконання:
const ulLinc = document.querySelector('#ingredients'); // посилання на порожній список
////Рішення А: 
const createItem = ingredients.map((element,index) => { 
const createEl = document.createElement('li'); //створення
createEl.textContent = element;  // дадається текстКонтент 
createEl.classList.add('item') // додається клас
return createEl
})
ulLinc.append(...createItem)

// ////Рішення В: 
// const createItem = ingredients.reduce((LongString,element) => {
//   const createEl = document.createElement('li'); //створення
//   createEl.textContent = element;  // дадається текстКонтент 
//   createEl.classList.add('item') // додається клас
//   return LongString + `${createEl.outerHTML}` // формування рядка HTML
// },'')
// ulLinc.innerHTML += createItem;

////////////Завдання:
// Напиши скрипт, який для кожного 
// елемента масиву ingredients:
// Створить окремий елемент < li >.
// Обов'язково використовуй метод
// document.createElement().
// Додасть назву інгредієнта як 
// його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі < li >
// за одну операцію у список ul#ingredients.

//   // <p><a href="index.html">Go back</a></p>

//   // <ul id="ingredients"></ul>
