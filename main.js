const colorR = document.querySelector('.color-r');

const colorG = document.querySelector('.color-g');

const colorB = document.querySelector('.color-b');

const equalsButton = document.querySelector('.equals');

const clearButton = document.querySelector('.clear');

const display = document.querySelector('.display');


let result = '';


function showResult () {
    if(colorR.innerHTML === '' || colorG.innerHTML === '' || colorB.innerHTML === '' || result !== '') return;

    let a = Number(colorR.innerHTML);
    let b = Number(colorG.innerHTML);
    let c = Number(colorB.innerHTML);
    result = a.toString(16).concat(b.toString(16)+c.toString(16));
    displayNumbers();

}

function displayNumbers () {

    display.innerHTML += result;
}

function clearScreen () {
    result = '';
    colorR.innerHTML = 'R';
    colorG.innerHTML = 'G';
    colorB.innerHTML = 'B';
    display.innerHTML = '';

}


 equalsButton.addEventListener('click', showResult);

 clearButton.addEventListener('click', clearScreen);



