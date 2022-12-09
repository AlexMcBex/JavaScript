let athleteFinalPosition = 'first place'; 
switch (athleteFinalPosition) { // with switch we can make some if else statements that activate with the change of the value
  case 'first place': //with case we declare the value that needs to be on
  console.log('You get the gold medal!'); //and followed by : we make the statement
  break;                                                        // closing the statement line with break;
  case 'second place':
  console.log('You get the silver medal!');
  break;
  case 'third place':
  console.log('You get the bronze medal!');
  break;
  default:  //default is the else statement
  console.log('No medal awarded.');
  break;
}


//eightBall exercise 
const userName = ""; 
// if userName ? has a value then log
userName ? console.log(`Hello, ${userName}!`)
//otherwise log:
: console.log('Hello!');
//userQuestion
const userQuestion = "Will I find love?";
//print question
console.log(userName + " asks: " + userQuestion);
//random number between 0 and 7
const randomNum = Math.floor(Math.random() * 8);
//empty eightBall answer variable
let eightBall = "";
//associate to the randomNum variable a eightBall answer
if (randomNum === 0) {
  eightBall = 'It is certain';
} else if (randomNum === 1) {
  eightBall = 'It is decidedly so';
} else if (randomNum === 2) {
  eightBall = 'Reply hazy try again';
} else if (randomNum === 3) {
  eightBall = 'Cannot predict now';
} else if (randomNum === 4) {
  eightBall = 'Do not count on it';
} else if (randomNum === 5) {
  eightBall = 'My sources say no';
} else if (randomNum === 6) {
  eightBall = 'Outlook not so good';
} else {
  eightBall = 'Signs point to yes';
}
//print random answer
console.log(eightBall);

//we can also use switch instead of else if
const userName = "";
userName ? console.log(`Hello, ${userName}!`)
: console.log('Hello!');
const userQuestion = "Will I find love?";
console.log(userName + " asks: " + userQuestion);
const randomNum = Math.floor(Math.random() * 8);
let eightBall = randomNum;
switch (eightBall) {
case (randomNum === 0) :
  eightBall = 'It is certain';
  break;
case (1) :
  eightBall = 'It is decidedly so';
  break;
case (2) :
  eightBall = 'Reply hazy try again';
  break;
case (3) :
  eightBall = 'Cannot predict now';
  break;
case (4) :
  eightBall = 'Do not count on it';
  break;
case (5) :
  eightBall = 'My sources say no';
  break;
case (6) :
  eightBall = 'Outlook not so good';
  break;
case (7) :
  eightBall = 'Signs point to yes';
  break;
default:
  eightBall = "Urrrr, IDK";
  break;
}
console.log(eightBall);

//Runners exercise
let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = false;
let runnerAge = 18;
if (runnerAge > 18 && earlyReg === true) {
  raceNumber += 1000;
  console.log("Race time: 9:30 am");
} else if (runnerAge > 18 && earlyReg === false) {
  console.log("Race time: 11:00 am");
} else if (runnerAge < 18) {
  console.log("Race time: 12:30 am");
} else {
  console.log("see the registration desk");
}

let groceryItem = "apple";
switch (groceryItem) {
  case "tomato":
    console.log("Tomatoes are $0.49");
    break;
  case "lime":
    console.log("Limes are $1.49");
    break;
  case "papaya":
    console.log("Papayas are $1.29");
    break;
  default: //default will print!!!!!!!!!!!
    console.log("Invalid item");
    break;
}

if (walkSignal === 'Walk') {
    console.log('You may walk!'); 
} else {   
    console.log('Do not walk!');
}
//in ternary it would be with the same effect:
walkSignal === 'Walk' ? console.log('You may walk!') : console.log('Do not walk!');

