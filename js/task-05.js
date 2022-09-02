
const lincOutp = document.getElementById('name-output')
const lincInpt = document.getElementById('name-input')
console.log(lincInpt)

const addSpanContent = (event) => {

   if (event.currentTarget.value === '') {
     lincOutp.textContent = "Anonymous"
     return
  }
  lincOutp.textContent = event.currentTarget.value
  
}

lincInpt.addEventListener("input", addSpanContent)

