//  <p><a href="index.html">Go back</a></p>
// <div id="counter">
//  <button type="button" data-action=
// "decrement" > -1</button >

//   <span id="value">0</span>

//  <button type="button" data-action=
//  "increment" > +1</button >
// </div>

let counter = document.querySelector('#value');
let counterValue = 0;
console.log(counterValue);

const upCallback = () => {
  counterValue += 1;
  counter.textContent = counterValue
};

const downCallback = () => {
  counterValue = counterValue -1;
  counter.textContent = counterValue
};

const downButton = document.querySelector('[data-action="decrement"]')
const upButton = document.querySelector('[data-action="increment"]')
downButton.addEventListener("click", downCallback)
upButton.addEventListener("click", upCallback)

