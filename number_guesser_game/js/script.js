// Getting element from the DOM
const num = document.getElementById('number');
const btn = document.getElementById('submit_number');
const message = document.getElementById('cnt');
const reset = document.getElementById('reset');

let chances = 3;

let low = 1;
let high = 10;

let correct = null;

function getRandomIntegerInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

correct = getRandomIntegerInclusive(low, high);

// console.log(correct);

// Adding event listeners
btn.addEventListener('click', checkGame);
reset.addEventListener('click', resetGame);

alert("Guess a number between 1 to 10.")

let firstElement = document.createElement('h3');
firstElement.appendChild(document.createTextNode(`You have ${chances} chances left!`));
firstElement.style.color = 'red';
message.appendChild(firstElement);

function checkGame() {
    chances--;
    number = num.value;
    var secondElement = document.createElement('h3');

    if (chances == 0 && number != correct) {
        secondElement.appendChild(document.createTextNode('You Lost!!'));
        secondElement.style.color = 'red';
        firstElement.parentNode.replaceChild(secondElement, firstElement);
        reset.disabled = false;
        num.disabled = true;
        num.value = '';
        btn.disabled = true;
        return;
    }

    if (number == correct) {
        secondElement.appendChild(document.createTextNode('You have Won!!!'));
        secondElement.style.color = 'green';
        firstElement.parentNode.replaceChild(secondElement, firstElement);
        firstElement = secondElement;
        reset.disabled = false;
        num.disabled = true;
        num.value = '';
        btn.disabled = true;
    } else if (number > correct && chances >= 0) {
        if (chances > 1) {
            secondElement.appendChild(document.createTextNode(`You have ${chances} chances left!`));
        } else {
            secondElement.appendChild(document.createTextNode(`You have ${chances} chance left!`));
        }
        secondElement.style.color = 'red';
        firstElement.parentNode.replaceChild(secondElement, firstElement);
        firstElement = secondElement;
        num.value = '';
        alert('Correct answer is smaller!');
    } else if (number < correct && chances >= 0) {
        if (chances > 1) {
            secondElement.appendChild(document.createTextNode(`You have ${chances} chances left!`));
        } else {
            secondElement.appendChild(document.createTextNode(`You have ${chances} chance left!`));
        }
        secondElement.style.color = 'red';
        firstElement.parentNode.replaceChild(secondElement, firstElement);
        firstElement = secondElement;
        alert('Correct answer is bigger!');
        num.value = '';
    }
}

function resetGame() {
    location.reload();
}


