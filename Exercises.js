console.log('JavaScript')    //console.log() is a function. It displays an element, in this case a string: plain text valued with single quotation marks
console.log(2011)    //displays the number 2011, numbers don't need quotation Marks
console.log('Woohoo! I love to code! #codecademy')
console.log(20.49)

console.log(17 + 3.5)   // shows the result of 17 + 3.5: 20.5
console.log(2022 - 1969)     // subtraction
console.log(65 / 240)   //division
console.log(0.2708 * 100)    //multiplication
console.log(100 % 99)    //remainder: what remains of the division (con il resto di), in this case console.log() will show 1

console.log('Hello' + 'World')   // same as the numbers also strings can be concatenated, console.log() will display in this case HelloWorld since there's no space
console.log('Hello' + ' ' + 'World')     //display: Hello World

console.log('how to code' .length)   //.length is a property, console.log() willl show the number of characters of the string in this case 11

console.log('Codecademy' .toUpperCase());   //.toUpperCase() is a method, its specific function is to display the string Uppercase: CODECADEMY
console.log('    Remove whitespace   '.trim());     //.trim() removes the space at the begginning and the end of the display of the string

console.log(Math.floor(Math.random() * 50));    //this code displays a random number between 0 and 50. 
// the function Math.random() picks a random decimal number between 0 and 1. This is multiplied* by 50. The result is returned to the lower or same integer number.

var favoriteFood = "pizza";     //defines a variable called favoriteFood with value 'pizza'
var numOfSlices = 8;
console.log(favoriteFood);  // console.log displays the value, in this case 'pizza'
console.log(numOfSlices);

let changeMe = true;    //defines the let variable changeMe as boolean true, a bolean can be only true (ON) or false (OFF) , it's written wihout quote marks
changeMe = false;   // let variables can be changed after being defined, in this line we switch it from true to false
console.log(changeMe)   //displays the changeMe let variable, in the most updated line it happens to be false

const myName = 'Gilberto';  // constants once defined can't be changed, trying to do so will result in an error message
console.log(myName);     //displays the constant value

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;
// let variables can be modified arithmetically if their values are numbers
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++; //value changes to 4
lostDollar--;  // value changes to 49
// -- and ++ functions are a quick way to add or subtract 1 unit from the value

var myName= 'Alex';
var myCity= 'NYC';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);
 //the selector ${} selects the variants so their values are displayed with the string texts in a string interpolation , to do this instead of the quotation mark we need `backticks`
 console.log('My name is ' + myName + '. My favorite city is ' + myCity + '.');
 //we can also write it down like this, with 'quotation marks'

 const unknown1 = 'foo';
 const unknown2 = 55;
 const unknown3 = true;
console.log(typeof unknown1); //typeof makes console.log() display the type of variable, in the case of unknown1 console.log() displays string
console.log(typeof unknown2); // this displays number
console.log(typeof unknown3);  //this displays boolean

//temp in kelvin
const kelvin = 293;
//temp in celsius
const celsius = kelvin - 273;
// temp in fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
//rounding down the fahrenheit
fahrenheit = Math.floor(fahrenheit);

let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`${celsius} degrees Celsius equal to ${newton} Newtons`);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit, AKA ${celsius} degrees Celsius`);


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



let sale = true;
sale = false;
// [if and else statements] if (sale) is true console.log('time to buy'), else/otherwise console.log the else statement
if(sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}

// < , > , <= , => , ===, !==, == can be used for if else statement as well
let hungerLevel = 7;
if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}



let mood = 'sleepy';
let tirednessLevel = 6;
// || means "or", if one of the 2 conditions is true the if statement gets activated, if they're both false the else statement gets activated
 if (mood === 'sleepy' || tirednessLevel > 8) { //mood gets checked, if it's false tirednessLevel gets checked
   console.log('time to sleep');
 } else {
   console.log('not bed time yet');
 }
// && is "and", both the conditions must be true for the if statement to be activated, if only one is false the else activates
 if (mood === 'sleepy' && tirednessLevel > 8) {
    console.log('time to sleep');
  } else {
    console.log('not bed time yet');
  }
  // ! is the NOT element. the if statement activates only if the condition in the ! element doesn't occour. since tirednessLevel>8 is false the if activates
  if (!(tirednessLevel > 8)) {
    console.log('time to sleep');
  } else {
    console.log('not bed time yet');
  }


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


  let stopLight = 'yellow';
 // else if  statement can add more conditions between the if and else statement. they're evaluated from the top to the bottom.
  if (stopLight === 'red') {
    console.log('Stop!');
  } else if (stopLight === 'yellow') {
    console.log('Slow down.');
  } else if (stopLight === 'green') {
    console.log('Go!');
  } else {
    console.log('Caution, unknown!');
  } // if the first is false we evaluate the second, if it's true we stop evaluating other conditions, if all else if are falses the else condition will run
// another else if example
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!'); // \ symbol in a string allows to type ' without closing the string
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!'); // prints this
} else {
  console.log('Invalid season.');
}

const luckyNumbers = [13, 42, 7, 28]; //the array has multiple items
luckyNumbers[0] = 99;
luckyNumbers[2] = luckyNumbers[0] - luckyNumbers[2];
console.log(luckyNumbers);

const favoriteFoods = ["Pizza", "Hamburger", "Salad", "Pasta"];
favoriteFoods.push("Steak"); //adds an element to the array
favoriteFoods.push("Sandwich");
favoriteFoods.pop(); // takes out the last element off an array
console.log(favoriteFoods);
console.log(favoriteFoods.length);

const aboutMe = {
  name: "Lisa Simpson", //name is a key, Lisa Simpson a value
  hometown: "Springfield, Oregon",
  age: 8,
  isABoss: true,
  hobbies: ["playing the saxophone", "political causes", "saving the world"]
};

const aboutMe = {};
aboutMe.name = "Alessio Belli"; //this way we add values to an object
aboutMe.age = 28;
// and we add the values to a concatenation
console.log("Hello! My name is " + aboutMe.name + " and I am " + aboutMe.age + " years old.");

const breakfast = ["Biscuits and Gravy", "Pancakes", "Huevos Rancheros"];
console.log(breakfast[breakfast.length-1])
breakfast.pop();
console.log(breakfast[breakfast.length-1])
breakfast.pop();
console.log(breakfast[breakfast.length-1])
breakfast.pop()

if (temperature < 60) {
  if (weather === "raining") {
      console.log("It's cold and raining. Time for a heavy rain jacket.");
  } else if (weather === "snowing") {
      console.log("It's cold and snowing. Get out the parka.");
  } else {
      console.log("It's cold and clear. Feels like sweater weather today.");
  }
} else {
  if (weather === "raining") {
      console.log("It's warm but it's raining. A light windbreaker will do.");
  } else if (weather === "sunny") {
      console.log("It's warm and sunny. Tank top it is.");
  } else {
      console.log("It's warm and clear. Regular old T-shirt day.");
  }
}
 
// Basic for Loop, it continues to execute until a certain condition is met
for (let i = 0; i < 100; i++) { //count every number from 0 up to 99, starting from the first statement we repeaat the third until the second is false and the loop stops
  console.log(i);
}

const characters = ["Garnet", "Amethyst", "Pearl", "Steven"];
for (let i = 0 ; i < characters.length; i++){ //keeps adding 1 to "i" starting from 0 and stopping when it reaches 4
    console.log(characters[i]) //displays all characters one by one, in the order of "i" number var
}

let number = 0; //while loops are easier to write
while (number < 11) { // here we add 1 to number value as long as it's less than 11
    number = number + 1;
}

let number = 10; //while loops are DANGEROUS because they risk to create an infinite loops which cause the browser to crash
while (number < 500) { //in here we subtract 1 from number variable until it's more than 500, since it will never be the loop won't stop
    number = number - 1;
}

//MATH PROBLEM
let investment = 1000; //investment of 1k dollars
for (let year = 1; year < 11; year++) { //we count 10 years
    if (year === 7) { // on the seventh year we lose 75%
        investment = investment * 0.25;
    }else{
        investment = investment * 1.10; //every other year we increase 10%
    }
    console. log("Years: " + year + " Value: " + investment );
}
/* we display:
Years: 1 Value: 1100
Years: 2 Value: 1210
Years: 3 Value: 1331
Years: 4 Value: 1464.1000000000001
Years: 5 Value: 1610.5100000000002
Years: 6 Value: 1771.5610000000004
Years: 7 Value: 442.8902500000001
Years: 8 Value: 487.17927500000013
Years: 9 Value: 535.8972025000002
Years: 10 Value: 589.4869227500002
*/

let daysUntilTheFinale = 30;
while (daysUntilTheFinale > 0) { //loop goes until the value is not more than 0
    console.log("Only " + daysUntilTheFinale + " more days!") //first action
    daysUntilTheFinale = daysUntilTheFinale - 1; //second action
}
console.log("It's finally here!"); //once the while statement is false this goes

//FUNCTIONS








