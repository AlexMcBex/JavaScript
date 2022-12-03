if (enemyAttack === true) {
    player.health -= 1;
    player.damageTaken += 1;
    player.points -= 100;
 } else if (monsterAttack === true) {
    player.health -= 1;
    player.damageTaken += 1;
    player.points -= 100;
 } else if (machineAttack === true) {
    player.health -= 1;
    player.damageTaken += 1;
    player.points -= 100;
 }//Instead of this we can make this

 function takeDamage() { //"introduce" functionname(parameters) {}
    player.health -= 1; //what it does
    player.damageTaken += 1;
    player.points -= 100;
} // a function is {invoked}

function sayHello() { //this only defines the function
    console.log("Hello!"); 
}

sayHello(); // this "calls" the function, activates it

//we can add parameters to specify the information provided 
function calculateTotal(price, salesTaxRate) { 
    const totalAmount = price + (price * salesTaxRate);
    console.log("The total is $" + totalAmount);
 }

/*we invoke a function with "arguments", they corrispond 
to the parameters and give them values*/
calculateTotal(4.50, .10);

function helloThere(name) {
    console.log("Hello, " + name + "!")
}
helloThere(Alex);
//

/*return function allows to calculate a value without printing 
it with console.log whih is supposed to be used only to debug*/
function calculateTotal(price, salesTaxRate) {
    return (price + (price * salesTaxRate)); 
 }
 const total = calculateTotal(4.5, .10);

const name = "Alex"
/*this is a globally scoped variable which can be accessed
by any function or command since it has been declared on the code*/
if (user === "me") {
    const lastName = "Belli";
 }
 /*variables declared inside a function or a statement and so
 inside the {parenthesis} are locally scoped and can only be used
 in the same function or statement*/
 console.log(lastName); 
 /* being locally scoped, lastName in console.log will print undefined*/

 //new javascript versions can use the arrow method to declare a variable instead 
 //of a function
 const calculateTotal = (price, salesTaxRate) => {
    return (price + (price * salesTaxRate));
 }
 calculateTotal(4.5, .10);

 

