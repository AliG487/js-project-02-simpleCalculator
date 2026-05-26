let button = document.querySelectorAll("button")
let display = document.querySelector(".display")
let btnEqual = document.querySelector("#butnEql")
let btnClear = document.querySelector("#btnClear")
const buttons = document.querySelectorAll(".btns")
let expression = ""

btnClear.addEventListener("click", clear)

btnEqual.addEventListener("click", calculate)

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    getValue(e)
  })
})

function getValue(e) {
  expression += e.target.value
  display.innerText = expression
}
function calculate() {
  if (expression) {
    let result = eval(expression)
    //round off result to 2 decimal places
    display.innerText = parseFloat(result.toFixed(2))
    expression = ""
  }
}
function clear() {
  display.innerText = ""
  expression = ""
}

function keyBoardInput() {
  window.addEventListener("keydown", (e) => {
    e.preventDefault()
    if (e.key === "Enter") {
      display.innerText = parseFloat(eval(expression).toFixed(2))
      expression = ""
    }
  })
}

keyBoardInput()
