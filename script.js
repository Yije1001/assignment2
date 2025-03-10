const inputElement = document.getElementById('name');
const messageElement = document.getElementById('message');
let intervalId; 
let alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
let usedAlphabets = [];

function createFallingLetter() {
    if (alphabetArray.length === 0) return;

    const randomIndex = Math.floor(Math.random() * alphabetArray.length);
    const letter = alphabetArray[randomIndex];
    const x = Math.floor(Math.random() * (container.offsetWidth - 50));
    const letterElement = document.createElement('div');
    letterElement.textContent = letter;
    letterElement.classList.add('letter');
    letterElement.style.left = `${x}px`;
    letterElement.style.top = `-50px`; 
    container.appendChild(letterElement);

    setTimeout(() => {
        letterElement.style.opacity = 1;
        letterElement.style.animation = 'fall 5s linear';
    }, 50);

    let fallInterval = setInterval(() => {
        const letterRect = letterElement.getBoundingClientRect();
        const inputRect = inputElement.getBoundingClientRect();

        if (letterRect.bottom >= inputRect.top && letterRect.left >= inputRect.left && letterRect.right <= inputRect.right) {
            inputElement.value += letter;
            letterElement.remove();
            clearInterval(fallInterval);
        }
    }, 10);

    alphabetArray.splice(randomIndex, 1);
    usedAlphabets.push(letter);

    if (alphabetArray.length === 0) {
        alphabetArray = [...usedAlphabets];
        usedAlphabets = [];
    }

    setTimeout(() => {
        letterElement.remove();
    }, 6000);
}

function startFallingLetters() {
    setInterval(createFallingLetter, 1000);
}

inputElement.addEventListener('focus', () => {
    if (!intervalId) {
        intervalId = startFallingLetters();
    }

    messageElement.style.display = 'block';
    messageElement.textContent = "Move the arrow keys to input text! ← →";

    setTimeout(() => {
        messageElement.style.display = 'none';
    }, 4000);
});

document.addEventListener('keydown', (e) => {
    let inputX = inputElement.offsetLeft;
    let inputY = inputElement.offsetTop;
    let moveSpeed = 15;
    
    if (e.key === 'ArrowLeft') {
        inputX = Math.max(0, inputX - moveSpeed);
    }
    else if (e.key === 'ArrowRight') {
        inputX = Math.min(container.offsetWidth - inputElement.offsetWidth, inputX + moveSpeed);
    }
    else if (e.key === 'ArrowUp') {
        inputY = Math.max(0, inputY - moveSpeed);
    }
    else if (e.key === 'ArrowDown') {
        inputY = Math.min(container.offsetHeight - inputElement.offsetHeight, inputY + moveSpeed);
    }

    inputElement.style.left = `${inputX}px`;
    inputElement.style.top = `${inputY}px`;
});
