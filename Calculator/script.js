const numberButtons = document.querySelectorAll('[data-number]') 
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-all-clear]')
const deleteButton = document.querySelector('[data-delete]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear()
    }

    clear(){
        this.currentOperandTextElement.textContent = ""
        this.previousOperandTextElement.textContent = ""
        this.operation = undefined
    }
    
    delete(){
        this.currentOperandTextElement.textContent = this.currentOperandTextElement.textContent.slice(0, -1);
    }
    
    appendNumber(number){
        if(number === '.' && this.currentOperandTextElement.textContent.includes('.')) return
        this.currentOperandTextElement.textContent += number
    }
    
    chooseOperation(operation){
        if (this.currentOperandTextElement.textContent === '') return
        if (this.previousOperandTextElement.textContent !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperandTextElement.textContent = this.currentOperandTextElement.textContent + " " + operation
        this.currentOperandTextElement.textContent = ''
    }
    
    compute(){
        let computation;
        const prev = parseFloat(this.previousOperandTextElement.textContent)
        const current = parseFloat(this.currentOperandTextElement.textContent)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperandTextElement.textContent = computation
        this.operation = undefined
        this.previousOperandTextElement.textContent = ''
    }
    
    updateDisplay(){
    }
}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})