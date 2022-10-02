
// Variable to store the list of guesses 

// Variable for store the correct random number 


// let guessnum = document.getElementById("number-guess").value;
// console.log(guessnum.textContent);

// load sounds 
const winsound = new Audio("Victory.mp3");

// Variable to store the list of guesses 
let guesses  ;

// Variable for store the correct random number
let correctNumber ;





window.onload = function() {
    restartgame()
    document.getElementById("number-submit").addEventListener("click", playgame);
    document.getElementById("restart-game").addEventListener("click", restartgame);
    document.getElementById("hint").addEventListener("click", hintans)
}

function playgame(){
    let guessnum = document.getElementById("number-guess").value;
    saveGuessnum(guessnum) ;
   
    displayHistory();
    displayresult(guessnum);

}

// Initialize a new game by resetting all values and content on the page
function restartgame(){
    correctNumber = getrandomnumber();
    guesses = []
    displayHistory()
    resetResultContent()
  }

// HINT PART 
function hintans(){
    let guessnum = document.getElementById("number-guess").value;
    // let hint1 =evenodd(correctNumber);
    // let hint2 =compaison(correctNumber);
    randomhint()
}

function randomhint(){
    let num =Math.floor(Math.random() *2);
    if(num == 0){
        evenodd(correctNumber);
    }
    else{
        compaison(correctNumber);
    }
}

function evenodd(correctNumber){
    let text ;
    if(correctNumber %2 == 0){
        text = "Try Even Number : ) ";
        let dialog = getDialog('hint', text)
        document.getElementById("result").innerHTML = dialog;

    }
    else{
        text = "Try Odd Number : ) ";
        let dialog = getDialog('hint', text)
        document.getElementById("result").innerHTML = dialog;
    }
}

function compaison(correctNumber){
    let text ;
    if(correctNumber>50){
        text = "Greater than 50";
        let dialog = getDialog('hint', text)
        document.getElementById("result").innerHTML = dialog;

    }
    else if(correctNumber < 50){
        text = "Lesser than 50";
        let dialog = getDialog('hint', text)
        document.getElementById("result").innerHTML = dialog;
    }
    else{
        text = "Correct Number 50";
        let dialog = getDialog('hint', text)
        document.getElementById("result").innerHTML = dialog;
    }
}



// show hint dialog
function showHintDialog(){
    console.log(hint);
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

function displayresult(guessnum ){

    if(guessnum > correctNumber){
        showNumberAbove();

    }
    else if(guessnum < correctNumber){
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
        case 'hint':
            dialog = "<div class='alert alert-info' role='alert'>"
            break;           
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
}
// user won
function showYouWon(){
    const text = "Awesome job, you got it!"
    let dialog = getDialog('won', text);
    winsound.play();
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
