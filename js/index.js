function init() {
    const calculadora = document.querySelector('.calculator');
    const keys = document.querySelector('.calculator__keys');
    const display = document.querySelector('.calculator__display');
    
    keys.addEventListener('click', e => {
        const key = e.target;
        const action = key.dataset.action;
        const displayNum = display.textContent;
        const previousKeyType = calculadora.dataset.previousKeyType;

        if (action) {
            if (action === 'add' || action === 'substract' || action === 'multiply' || action === 'divide') {
                calculadora.dataset.previousKeyType = 'operador';
                calculadora.dataset.firstValue = displayNum;
                calculadora.dataset.operador = action;
            } else if (action === 'calculate') {
                const firstValue = calculadora.dataset.firstValue;
                const operador = calculadora.dataset.operador;
                const secondValue = displayNum;
                display.textContent = operar(firstValue, operador, secondValue);
            }
        } else {
            if (displayNum === '0' || previousKeyType === 'operador') {
                display.textContent = key.textContent;
            } else {
                display.textContent = displayNum + key.textContent;
            }
            calculadora.dataset.previousKeyType = 'numero';
        }

    })
}

function operar(v1, op, v2) {
    if (op === 'add') {
        return parseFloat(v1) + parseFloat(v2);
    }
    if (op === 'substract') {
        return parseFloat(v1) - parseFloat(v2);
    }
    if (op === 'multiply') {
        return parseFloat(v1) * parseFloat(v2);
    }
    if (op === 'divide') {
        return parseFloat(v1) / parseFloat(v2);
    }
}