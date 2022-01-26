let fruitArray = [
    "grape",
    "pineapple",
    "apple",
    "banana",
    "jackfruit",
    "pear",
    "grapefruit",
    "tomato",
    "melon",
    "papaya",
    "soursop",
    "orange",
    "tamarind",
    "tangerine"
];

let answer = ''
let maxWrong = 6
let mistakes = 0
let guessed = []
let wordStatus = null

function randomWord() {
    answer = fruitArray[Math.floor(Math.random() * fruitArray.length)]

    
}

function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyç'.split('').map(letter =>
        `
        <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onclick="handleGuess('` + letter + `')" 
        >
        ` + letter + `
        </button>
        `).join('')
    document.getElementById('keyboard').innerHTML = buttonsHTML
}

function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null
    document.getElementById(chosenLetter).setAttribute('disabled', true)

    
    if (answer.indexOf(chosenLetter) >= 0) {
        guessedWord()
        checkIfGameWon()
    } else if (answer.indexOf(chosenLetter) === -1) {
        mistakes++
        updateMistakes()
        checkIfGameLost()
        updateHangmanPic()
    }
}



function updateHangmanPic() {
    document.getElementById('hangmanPic').src = './img/' + mistakes + '.jpg'
}

function checkIfGameWon() {
    if (wordStatus === answer) {
        document.getElementById('keyboard').innerHTML = 'You Won!!!!'
    }
}

function checkIfGameLost() {
    if (mistakes === maxWrong) {
        document.getElementById('wordSpotlight').innerHTML = 'The correct Answer was: ' + answer
        document.getElementById('keyboard').innerHTML = 'You Lost!!!!'
    }
}


function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('')

    document.getElementById('wordSpotlight').innerHTML = wordStatus
}

function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes
}

function reset(){
    mistakes = 0
    guessed = []
    document.getElementById('hangmanPic').src = './img/0.jpg'

    randomWord()
    generateButtons()
    guessedWord()
    generateButtons()
    updateMistakes()
}

document.getElementById('maxWrong').innerHTML = maxWrong;


randomWord()
generateButtons()
guessedWord()