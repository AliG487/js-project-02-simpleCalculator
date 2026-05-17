let button = document.querySelectorAll("button")
let display = document.querySelector(".display")
let btnEqual = document.querySelector("#butnEql")
let btnClear = document.querySelector("#btnClear")
const buttons = document.querySelectorAll(".btns")
let buttonValue = ""

btnClear.addEventListener("click", clear)

btnEqual.addEventListener("click", calculate)

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    getValue(e)
  })
})

function getValue(e) {
  buttonValue += e.target.value
  display.innerText = buttonValue
}
function calculate() {
  if (buttonValue) {
    let result = eval(buttonValue)
    //round off result to 2 decimal places
    display.innerText = parseFloat(result.toFixed(2))
    buttonValue = ""
  }
}
function clear() {
  display.innerText = ""
  buttonValue = ""
}
