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
//Storing user input
function getValue(e) {
  expression += e.target.value
  display.innerText = expression
}

//calculation
function calculate() {
  if (expression) {
    let result = eval(expression)
    //round off result to 2 decimal places
    display.innerText = parseFloat(result.toFixed(2))
    expression = ""
  }
}
//Clearing display and stored expression value
function clear() {
  display.innerText = ""
  expression = ""
}

//"Enter" key handling.
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
