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

let favoritePhrase = "Love That!";
favoritePhrase === "Love That!"
  ? console.log("I love that!")
  : console.log("I don't love that!");






