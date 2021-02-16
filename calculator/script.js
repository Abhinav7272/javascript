class Calculator {
    constructor (previousOperandTextElement,currentOperandTextElement){
        this.currentOperandTextElement = currentOperandTextElement
        this.previousOperandTextElement = currentOperandTextElement
        clear();
    }
    clear(){
        this.currentOperand =''
        this.previousOperand=''
        this.operand = undefined
    }
    appendNumber(number){
        this.currentOperand= number
    }
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}



const numberbuttons = document.querySelectorAll('[data-number]')
const operationbuttons = document.querySelectorAll('[data-operation]')
const equalsbuttons = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)
numberbuttons.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})