let randomnumber=parseInt(Math.random()*100+1)
const submit=document.querySelector("#subt")
const userInput=document.querySelector(".guessField")
const guessSlot=document.querySelector(".guesses")
const remaining=document.querySelector(".lastguess")
const loworhi=document.querySelector(".lowOrHi")
const startover=document.querySelector(".resultParas")

const p=document.createElement("p")

let prevGuess=[]
let numGuess=1
let playGame=true


if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)|| guess<1 || guess>100){
        alert("Please enter a correct number")
    }
    else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayguess(guess)
            displaymessage(`Game over . random number was ${randomnumber}`)
            endgame()
        }
        else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
    if(guess===randomnumber){
        displaymessage(`You guessed it right`)
        endgame()
    }
    else if(guess<randomnumber){
        displaymessage(`Number is too low`)
    }
    else{
        displaymessage(`Number is too high`)
    }
}

function displayguess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess},`
    numGuess++
    remaining.innerHTML=`${11-numGuess}`
}

function displaymessage(message){
    loworhi.innerHTML=`<h2>${message}</h2>`
}

function endgame(){
    userInput.value=''
    userInput.setAttribute("disabled",'')
    p.classList.add("button")
    p.innerHTML=`<h2 id="newGame">Start new game</h2>`
    startover.appendChild(p)
    playGame=false
    newgame()

}

function newgame() {
    const newg = document.querySelector("#newGame");
    newg.addEventListener('click', function (e) {
        randomnumber = parseInt(Math.random() * 100 + 1); // Generate a new random number
        prevGuess = []; 
        numGuess = 1; // Reset the number of guesses
        guessSlot.innerHTML = ''; // Clear the displayed guesses
        remaining.innerHTML = `${11 - numGuess}`; // Reset remaining guesses
        userInput.removeAttribute("disabled"); // Enable the input field
        startover.removeChild(p); // Remove the "Start New Game" button
        playGame = true; // Set the game state to active
    });
}

