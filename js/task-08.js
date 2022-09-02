
const formLinc = document.querySelector('.login-form')
const formLoginInptLinc = document.querySelector('[type="email"]')
const formPassInptLinc = document.querySelector('[type="password"]')

const objWithData = Object()   /// Оголошення об'єкту для заповнення з середини функції (можна було б і вфункції оголосити але мені здається що тут правельніше)

function switzerlandKnifeFunc(event) {
  
  event.preventDefault(); // Скидає перезаванаження сторінки

  const emailValue = event.currentTarget.elements.email.value ///  Доступ до властивостей об'єкта email (Можна було і через деструктуризацію ,але так мені зручніше було незнаю чи правельно  )
  const passValue = event.currentTarget.elements.password.value ///  Доступ до властивостей об'єкта  login (Можна було і через деструктуризацію ,але так мені зручніше було незнаю чи правельно  )

  if (emailValue === '' || passValue === '') {  ///// Перевірка чи не пусті інпути 
    alert('!!!! Please fill in all fields: "Login" and "Password", to continue !!!')
    return
  }
  objWithData[`${formPassInptLinc.name}`] = passValue  ////// Додавання в об'єкт  зі збереження імені інпута
  objWithData[`${formLoginInptLinc.name}`] = emailValue   ////// Додавання в об'єкт  зі збереження імені інпута
 
  console.log(objWithData)  /// Вивід  в консоль  об'єкта
  
  formLinc.reset()  /// ресет для очищення полів
}

formLinc.addEventListener('submit',switzerlandKnifeFunc)


