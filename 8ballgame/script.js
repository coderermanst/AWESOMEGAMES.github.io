
const ball8 = document.getElementById('button')
const text = document.getElementById('guesser')

function guess() {
    let TextGuess = Math.floor(Math.random() * 5) +1;
    if (TextGuess === 1) {
        text.textContent = 'Yes';
    } else if (TextGuess === 2) {
        text.textContent = 'NO';
    } else if (TextGuess === 3) {
        text.textContent = 'maybe';
    } else if (TextGuess === 4) {
        text.textContent = 'I dont think so';
    } else if (TextGuess === 5) {
        text.textContent = 'Proboly'
    }
    console.log(TextGuess)
}