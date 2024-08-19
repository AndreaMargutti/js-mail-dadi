// ! Esercizio Dadi
// # Fase di raccolta dati
// Recupero elementi html

const userParagraph = document.getElementById('user-number');
const cpuParagraph = document.getElementById('cpu-number');
let diceMessage = document.getElementById('dice-result');
console.log(userParagraph, cpuParagraph, diceMessage)

let winMessage = '';

// Generiamo i numeri casuali

const userNumber = Math.floor(Math.random() * 6) + 1;
console.log('numero-utente =', userNumber);

const pcNumber = Math.floor(Math.random() * 6) + 1;
console.log('numero-pc =', pcNumber);

// # Fase elaborazione dati
// Stabiliamo il vincitore

if(userNumber > pcNumber){
    winMessage = 'Hai Vinto!';
} else if (userNumber === pcNumber) {
    winMessage = 'Pareggio!';
} else {
    winMessage = 'Hai Perso!'
}

// # Fase di Output
// Stampiamo in Pagina

userParagraph.innerText += userNumber;
cpuParagraph.innerText += pcNumber;
diceMessage.innerText += winMessage;