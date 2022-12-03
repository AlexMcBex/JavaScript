console.log('Here' + ' ' + 'We ' + 'Go!')

console.log(Math.floor(Math.random() * 50));

var myName = 'Alex'
console.log(`Hi my Name is ${myName}`);

//Human Age
const myAge = 27;
//first 2 years of human age
var earlyYears = 2;
// converted in dog years
earlyYears*= 10.5;
//the rest of human age
let laterYears= myAge - 2;
// converted to dog years
laterYears*= 4;
//test to see if the result is correct for the conversions
console.log(earlyYears);
console.log(laterYears);
// sum of dog years conversions
var myAgeInDogYears= earlyYears + laterYears;
// declared var my name
var myName= 'Alessio'.toLowerCase();
//final console.log shows the final result
console.log('My name is ' + myName + '. I am ' + myAge + ' years which is ' + myAgeInDogYears + ' years old in dog years.');

 // 0, null, '' or "", undefined or NaN are all non-boolean(true or false) values that count as false
  let wordCount = 0; //false value
if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!'); //prints this
}

let favoritePhrase = 'Hello World!'; //true value
if (favoritePhrase) {
  console.log("This string doesn't seem to be empty."); //Prints This
} else {
  console.log('This string is definitely empty.');
}

let tool = '';
// since tool is an empty string in declaring the variable writingUtensil, tool is false, so with the ||or condition the string 'pen' declares the variant
let writingUtensil = tool || 'pen';
// unless a string value is set in the variant tool defining writingUtensil, console.log() will print 'pen'
console.log(`The ${writingUtensil} is mightier than the sword.`);

let isLocked = false;

isLocked
  ? console.log("You will need a key to open the door.")
  : console.log("You will not need a key to open the door.");
/*
equals to:
if (isLocked) {
    console.log("You will need a key to open the door.");
} else {
    console.log("You will not need a key to open the door.");
}
    it shorts the syntaxis for the code.
*/
let isCorrect = true;
isCorrect 
  ? console.log("Correct!") 
  : console.log("Incorrect!");
// other example of shortened syntaxis
let favoritePhrase = "Love That!";
favoritePhrase === "Love That!"
  ? console.log("I love that!")
  : console.log("I don't love that!");
//update


const characters = ["Garnet", "Amethyst", "Pearl", "Steven"];
for (let i = 0 ; i < characters.length; i++){ //keeps adding 1 to "i" starting from 0 and stopping when it reaches 4
    console.log(characters[i]) //displays all characters one by one, in the order of "i" number var
}

//3 choices
let choices = ["Paper", "Scissor", "Rock"];
//player and computer picked choices
const player = {
  choice: 0
}
const computer = {
  choice: 0
}

//change [] to choose
player.choice = choices[1];

//Choice of the computer
function computerChoice(){
  // random number 
  const randomNum = Math.floor(Math.random() * choices.length);
  computer.choice = choices[randomNum];
}

//function: invoke computer choice function and compare the coiches
function compareChoices(){
  computerChoice();
  //Player chooses Paper
if (player.choice === choices[0]) {
  if (computer.choice === choices[1]) {
      displayResult("The player chose " + choices[0] + ", the computer chose " + choices[1] + ". Computer wins!");
  } else {
      cdisplayResult("The player chose " + choices[0] + ", the computer chose " + choices[2] + ". Player wins!");
  }
}
//Player chooses Scissor
if (player.choice === choices[1]) {
  if (computer.choice === choices[2]) {
      displayResult("The player chose " + choices[0] + ", the computer chose " + choices[2] + ". Computer wins!");
  } else {
      displayResult("The player chose " + choices[1] + ", the computer chose " + choices[0] + ". Player wins!");
  } 
}
//Player chooses Rock
if (player.choice === choices[2]) {
  if (computer.choice === choices[0]) {
      displayResult("The player chose " + choices[2] + ", the computer chose " + choices[0] + ". Computer wins!");
  } else {
      displayResult("The player chose " + choices[2] + ", the computer chose " + choices[1] + ". Player wins!");
  }
}
//PLayer and computer choose the same
if (player.choice === computer.choice) {
  displayResult("The player and the computer both chose " + player.choice + ", it's a tie!")
}
  function displayResult(result){
    const resultText = document.createElement('p');
    resultText.innerText = result;
    document.body.appendChild(resultText);
    
  }
}
//invoke the function
  compareChoices();










