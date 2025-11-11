// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
    "dependent", "dog", "superficial", "admit", "juice", "javascript", "developer",
    "airplane", "great", "fun", "manipulate", "cat", "transition", "school", "computer",
    "programming", "drag", "loving", "north", "test", "icecream", "sweden", "entertainment"
];

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//initializing time
let time =10; 

/*//Initializing time (Can you tell me how i make a change in difficulty selection?) Do i need to create another text.eventlistener for Medium n Hard levels??
const difficulty = {
  easy: 10,
  medium: 5,
  hard: 3
};

// To change difficulty-
const currentLevel = difficulty.easy;
let time = currentLevel;*/

//Add world to DOM.
function addWordToDOM(words) {
    randomWord = words[Math.floor(Math.random() * words.length)];
    word.innerHTML = randomWord;
}

// to update score-
function updateScore() {
    score++; // increase the score by 1.
    scoreEl.innerHTML = score; // set the new score in UI
}

//Event listener for typing input- (by default and easy)
text.addEventListener("input", function(e) {
    const enteredText = e.target.value.trim();
    if (enteredText === randomWord) // check if user entered text matches the random text.
    {
        updateScore(); // update the score
        addWordToDOM(words); // call the function to display new random word.
        e.target.value = ""; // empty the input field.
        time += 5; // increase the time with 5 
        timeEl.innerHTML = time; // display latest time in UI.
    }
})

//Add event listener to settings button to hide the settingsbtn-(optional)
  settingsBtn.addEventListener("click", function(e) {
    settings.style.display = 'none';
})

  settingsBtn.addEventListener("dblclick", function(e) {
    settings.style.display = 'flex';
})

//Update time every time.
function updateTime() {
    const timeInterval = setInterval(function() {
        time--; // reduce time by every sec
        timeEl.innerHTML = time; // update the time in UI
        if (time === 0) // if time goes out
        {
            clearInterval(timeInterval);
            gameOver();
        }
    }, 1000)
}

function gameOver() {
    endgameEl.innerHTML = `
    <h1> Game Over </h1>
    <p> Your final score is ${score} </p>
    <button onclick="location.reload()"> Play Again </button>`;
    endgameEl.style.display = "flex";
}


/*//Changes in settingsForm so that you can change in difficulty( Medium & Hard Levels) (optional)
settingsForm.addEventListener("click" , function(e) {
      

    text.addEventListener("input", function (e) {
    const enteredText = e.target.value.trim();
    if (enteredText === randomWord) // check if user entered text matches the random text.
    {
        updateScore(); // update the score
        addWordToDOM(words); // call the function to display new random word.
        time += 3; // increase the time with 3
        timeEl.innerHTML = time; // display latest time in UI.
        e.target.value = ""; // empty the input field.
    }
})
})*/

addWordToDOM(words);
updateTime();
