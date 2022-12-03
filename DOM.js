document.querySelector()//finds the first matching element of the document
document.querySelectorAll()//finds all matching elements

document.querySelector('p') // selects the first <p> element
document.querySelectorAll('.hero')//selects all elements with class .hero
//once selected we can use many DOM elements
//select the first h2 element in the HTML and change it to Hello there!
document.querySelector('h2').innerHTML = 'Hello there!';
//change the style - color to blue of all the p elements
document.querySelectorAll('p').style.color = 'blue'; 
document.querySelector('p').className = 'complete';
document.querySelector('p').parentNode;
document.querySelector('p').childNodes;

document.querySelector('h1').innerHTML = "Visit my <a href='http://www.coolsite.net'>site</a>";

const h1ID = document.querySelector('h1').getAttribute('id');
// This would store the ID attribute of the <h1> in the variable called h1ID.

document.querySelector('#title').setAttribute('class', 'blue');
// This would give the element with the ID of "title" a class of "blue."

document.querySelectorAll('p').removeAttribute('class');
// This would remove the class attribute from all <p> elements.

//.className, adds a class to an element selected with document.querySelector
document.querySelector('h2').className = 'urgent';

//we can create html elements on Javascript
const paragraph = document.createElement('p');
paragraph.innerText = "Your passwords did not match.";
paragraph.setAttribute("class", "registration-error");
// This is what's created: <p class="registration-error">Your passwords did not match.</p>
//once created the elements have to be placed to the DOM
// First, we create the element and store it in a variable named newPost
const newPost = document.createElement("p");
// Then, we can set properties such as the innerText
newPost.innerText = "JavaScript can be tough!";
// Then, we can grab the parent element that we want to attach our new element to
const postsDiv = document.querySelector("#posts");
// Finally, we use the append method to add our newPost inside of the #posts Div element
postsDiv.append(newPost);//adds the element to the original as the last child
postsDiv.prepend(newPost);//adds the element to the original as the first child


const text = document.querySelector('#title').innerText;
console.log(text);

const spann = document.querySelector('span').className;
console.log(spann);
 
const h4 = document.createElement("h4");
h4.innerText = "Powered by JavaScript"
document.body.appendChild(h4);

document.querySelector('#title').remove();
    
//event listeners specify what function happens to an element when the user interacts
onload  // When the page loads.
onclick  // When a user clicks something.
onmouseover  // When a user hovers their mouse over something.
onfocus  // When a user puts the cursor on a form field

elementToGrab.onclick = function() {
    // Code that should run 
 };

// another way is:
 document.querySelector('#login').onclick = respondToLoginAttempt;

/* we can also use addEventListener to get the same effect, in this case we define first
the function to be executed and then the event being listened for*/
function sayHello() {
    console.log("Hello!");
}
document.querySelector('button').addEventListener('click', sayHello); 
// this method is newer, old browsers may not support it
//also .onclick method overwrites any previous click listeners
//addEventListener preserves instead other existing listeners


//adding an event object we can use the element we listen at the same time
document.querySelector('#disappearing-button').onclick = function(e) {
    console.log(e.target);
    e.target.remove();
}


document.addEventListener('DOMContentLoaded', function(event) {
    function sendAMessage() { //this function prints the value of an input element
        const message = document.getElementById("message").value;
        console.log(message);
    }
    document.getElementById("generate-message").addEventListener('click', sendAMessage);
    //clicking on the button will trigger the sendAMessage function
})


document.addEventListener('DOMContentLoaded', function(event) {
    //insert your answer within this code block
    function grabValue() {
        const message = document.getElementById("new-todo").value;//<input>
        console.log(message);
    const newList = document.createElement("li");
    newList.innerText = message;
    const unList = document.querySelector('.todos');// <ul> element
    unList.appendChild(newList);
    document.getElementById("new-todo").value = '';
    }
        document.getElementById("generate-todo").addEventListener('click', grabValue);
        //<button> element
    })