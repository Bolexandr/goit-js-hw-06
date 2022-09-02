// Напиши скрипт, який під час втрати фокусу на
// інпуті(подія blur), перевіряє його вміст щодо
// правильної кількості введених символів.
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
//   Яка кількість смиволів повинна бути в інпуті,
//  зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів, то
// border інпуту стає зеленим, якщо неправильна
// кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і
// invalid, які ми вже додали у вихідні файли завдання.

const inptAreaLinc = document.getElementById('validation-input');
const dataLength = Number(inptAreaLinc.dataset.length);
console.log(dataLength);
console.dir(inptAreaLinc);

function changeBorderColor(event) {
  const inptStringLength = Number(event.currentTarget.selectionStart);

  if (inptStringLength === dataLength) {
    if (!inptAreaLinc.classList.contains('invalid')) {
      inptAreaLinc.classList.add('valid');
      return;
    }
    inptAreaLinc.classList.replace('invalid', 'valid');
    console.log('inptStringLengthInIf =', inptStringLength);
    return;
  } else {
    inptAreaLinc.classList.add('invalid');
    console.log('inptStringLength= ', inptStringLength);
  }
  return;
}

inptAreaLinc.addEventListener('blur', changeBorderColor);
