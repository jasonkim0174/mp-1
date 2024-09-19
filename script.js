function calculate(operation) {
    const num1 = parseFloat(document.getElementById('first-number').value);
    const num2 = parseFloat(document.getElementById('second-number').value);
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '**':
            result = power(num1, num2);
            break;
        default:
            break;
    }
    document.getElementById('output').innerHTML = result;
    if (result < 0) {
        document.getElementById('output').style.color = 'red';
    } else {
        document.getElementById('output').style.color = 'black';
    }
}

function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

function clearInputs() {
    document.getElementById('first-number').value = '';
    document.getElementById('second-number').value = '';
    document.getElementById('output').innerHTML = '';
}
