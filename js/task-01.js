///////////Виконання:
const ulCategoriesLinc = document.querySelectorAll("#categories") // Посилання на улку через айдішку
////Перша частина задачі:
// //Рішення А:
// const subArrItems = ulCategoriesLinc.querySelectorAll(".item") // Створюємо масив лішок з класом ".item"
// const countElem = subArrItems.length // Рахунок скільки є елементів ітемс
// console.log(countElem) //  Виводимо в консоль кількість ітемів

//Рішення В:
console.log('Number of categories:',ulCategoriesLinc.querySelectorAll(".item").length)

////Друга частина задачі:
const subArrItems = ulCategoriesLinc.querySelectorAll(".item") // create Arr of items
subArrItems.forEach(element => {
  const h2Val = element.querySelector('h2') // Значення заголовку на кожній ітерації
  const countLiItem = element.querySelectorAll('li')
console.log('Category:',h2Val.textContent)
console.log('Elements: ',countLiItem.length)
});

/////////////////////Завдання:
//Напиши скрипт, який:
// Порахує і виведе в консоль
// категорій в ul#categories, тобто кількість елементів li.item.
// Для кожного элемента li.item у спику
//  ul#categories, знайде і виведе в консоль текст
// заголовку елемента(тегу < h2 >) і кількість
//  елементів в категорії(усіх < li >, вкладених в нього).
  // <body>
//     <p><a href="index.html">Go back</a></p>

//     <ul id="categories">
//       <li class="item">
//         <h2>Animals</h2>

//         <ul>
//           <li>Cat</li>
//           <li>Hamster</li>
//           <li>Horse</li>
//           <li>Parrot</li>
//         </ul>
//       </li>



