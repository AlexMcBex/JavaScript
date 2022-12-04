//3 choices
let choices = ["Papyrus", "Lapis", "Scalpellus"];
//player and computer picked choices
const player = {
  choice: 0
}
const computer = {
  choice: 0
}

  //Choice of the computer
  function computerChoice(){
    // random number 
    
    const randomNum = Math.floor(Math.random() * choices.length);
    computer.choice = choices[randomNum];
  }

//function: invoke computer choice function and compare the coiches
function compareChoices(){
  computerChoice();
  //Player chooses Papyrus
if (player.choice === choices[0]) {
  if (computer.choice === choices[1]) {
      displayResult("The player chose " + choices[0] + ", the computer chose " + choices[1] + ". Computer wins!");
  } else {
      displayResult("The player chose " + choices[0] + ", the computer chose " + choices[2] + ". Player wins!");
  }
}
//Player chooses Lapis
if (player.choice === choices[1]) {
  if (computer.choice === choices[2]) {
      displayResult("The player chose " + choices[1] + ", the computer chose " + choices[2] + ". Computer wins!");
  } else {
      displayResult("The player chose " + choices[1] + ", the computer chose " + choices[0] + ". Player wins!");
  } 
}
//Player chooses Scalpellus
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
    const resultText = result;
    document.getElementById("display-result").innerText = resultText;  
  }
}

//the user clicks on PAPYRUS button
function selectPapyrus(){
  player.choice = choices[0];
  //invoke the function
  compareChoices()
}
document.getElementById("Papyrus").addEventListener('click', selectPapyrus);

//the user clicks on LAPIS button
function selectLapis(){
  player.choice = choices[1];
  //invoke the function
  compareChoices();
}
document.getElementById("Lapis").addEventListener('click', selectLapis);

//the user clicks on SCALPELLUS button
function selectScalpellus(){
  player.choice = choices[2];
  //invoke the function
  compareChoices();
}
document.getElementById("Scalpellus").addEventListener('click', selectScalpellus);