document.getElementById('btn-generate-pin').addEventListener('click', function () {
    pinGenerator();
})

// this logic is developed by me (Ehsan)

/* function pinGenerator() {
    const showPinField = document.getElementById('show-pin-field');
    const generatePin = parseInt(Math.random() * 10000);
    if (generatePin > 999) {
        showPinField.value = generatePin;
    }
    else {
        pinGenerator();
    }
} */

function pinGenerator() {
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
}