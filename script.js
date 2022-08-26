/**
 * Guess The Number Game
 * TODO: Get user value from input and save it to variable numberGuess
 * TODO: Generate a random number 1 to 100 and save it to variable correctNumber
 * TODO: Console whether the guess is too high, too low, or is correct inside playGame function
 * TODO: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * TODO: Complete the showYouWon, showNumberAbove, showNumberBelow
 * TODO: Use the showYouWon... functions within displayResult to display the correct dialog
 * TODO: Save the guess history in a variable called guess
 * TODO: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 

// Variable for store the correct random number 


// let guessnum = document.getElementById("number-guess").value;
// console.log(guessnum.textContent);


// Variable to store the list of guesses 
let guesses =[] ;

// Variable for store the correct random number
let correctguessnum ;

function playgame(){
    let guessnum = document.getElementById("number-guess").value;
    saveGuessnum(guessnum) ;
    let randomnum = getrandomnumber();
    displayHistory();
    displayresult(guessnum , randomnum);

}

// Initialize a new game by resetting all values and content on the page
function restartgame(){
    correctNumber = getrandomnumber();
    guesses = []
    displayHistory()
    resetResultContent()
  }

// Reset the results list display
function resetResultContent(){
    document.getElementById("result").innerHTML = "";
  }

// function to generate num between 1 -100 ;

function getrandomnumber(){
    let num =Math.floor(Math.random() *100);
    return num ;
}

// save guess which is shown to the save data under the buttons

function saveGuessnum(guess){
    guesses.push(guess);
}

function displayHistory(){
    let index = guesses.length -1 ;
    //     <ul>
        //     <li></li>
        //     <li></li>
        // </ul>    
        // like this we are using the wile loop to append data ::

    let list = "<ul class = 'list-group'>";
    while (index>=0) {
        list += 
        "<li class='list-group-item'>" + 
        "You guessed " + guesses[index] +
        "</li>";
      index-=1
    }
    list += '</ul>'
    document.getElementById("history").innerHTML = list;
  }

function displayresult(guessnum , randnum){

    if(guessnum > randnum){
        showNumberAbove();

    }
    else if(guessnum < randnum){
        showNumberBelow();
    }
    else{
        showYouWon();
    }
}  

function getDialog(type , text){
    let dialog ;
    switch(type){
        case 'won':
            dialog = "<div class='alert alert-success' role='alert'>" ;
            break ;
        case 'warning':
            dialog = "<div class='alert alert-warning' role='alert'>"
            break;       
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
}
// user won
function showYouWon(){
    const text = "Awesome job, you got it!"
    let dialog = getDialog('won', text)
    document.getElementById("result").innerHTML = dialog;
  }

  /// high num
function showNumberAbove(){
    const text = "Your guess is too high!"
    let dialog = getDialog('warning' , text);
    document.getElementById('result').innerHTML = dialog ;
}

// low num 
function showNumberBelow(){
    const text = "Your guess is too low!"
    let dialog = getDialog('warning' , text);
    document.getElementById('result').innerHTML = dialog ;
}