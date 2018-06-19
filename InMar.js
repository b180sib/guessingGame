var max=101
var min=0
var cGuess=0;
var Guesses=1;

function Guess(n){
    if(n==1){
        min=cGuess
    }

    else{
        max=cGuess
    }
    Guesses=Guesses+1
    cGuess=Math.floor((max+min)/2)
    Guesser.value=cGuess
    guesses.value=Guesses
}

function Start(){
    max=101
    min=0
    cGuess=50;
    Guesses=1;
    Guesser.value=cGuess
    guesses.value=Guesses
}