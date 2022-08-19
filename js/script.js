// pin genetator code
// this logic is developed by me (Ehsan)
function pinGenerator() {
    const showPinField = document.getElementById('show-pin-field');
    const generatePin = Math.round(Math.random() * 10000);
    if (generatePin > 999) {
        showPinField.value = generatePin;
    }
    else {
        pinGenerator();
    }
}

document.getElementById('btn-generate-pin').addEventListener('click', function () {
    pinGenerator();
})

// this logic is developed by programming hero
/* function pinGenerator() {
    const showPinField = document.getElementById('show-pin-field');
    const generatePin = parseInt(Math.random() * 10000) + '';
    const splitPin = generatePin.split('');
    if (splitPin.length == 4) {
        const joinPin = splitPin.join('');
        showPinField.value = joinPin;
    }
    else {
        pinGenerator();
    }
} */


// pin matcher code
const showNumberField = document.getElementById('show-number-field');

document.getElementById('numbers-container').addEventListener('click', function (event) {
    const number = event.target.innerText;
    if (!isNaN(number)) {
        const previousNumber = showNumberField.value;
        showNumberField.value = previousNumber + number;
    }
})

document.getElementById('btn-clear').addEventListener('click', function () {
    showNumberField.value = '';
})

document.getElementById('btn-delete').addEventListener('click', function () {
    const showNumberValue = showNumberField.value;
    const splitNumber = showNumberValue.split('');
    splitNumber.pop();
    const joinNumber = splitNumber.join('');
    showNumberField.value = joinNumber;
})

document.getElementById('btn-submit').addEventListener('click', function () {
    const showPinField = document.getElementById('show-pin-field');
    const showPin = showPinField.value;

    const showNumberValue = showNumberField.value;

    const messageSucccess = document.getElementById('message-success');
    const messageFailure = document.getElementById('message-failure');

    if (showPin == showNumberValue) {
        messageFailure.style.display = 'none';
        messageSucccess.style.display = 'block';
    }
    else {
        messageSucccess.style.display = 'none';
        messageFailure.style.display = 'block';
    }
})