// // Assignment 4
// // Author: Orion Wu

// // Practice with Functions

function halfNumber(num) {
    let result = (num / 2);
    document.write(`Half of ${num} is ${result}`,'<br>');
}
halfNumber(5)

function squareNumber(num){
    let result = (num ** 2);
    document.write(`The result of squaring the number ${num} is ${result}`,'<br>');
}
squareNumber(3)

function percentOf(num1,num2){
    let result = (100* num1)/num2;
    document.write(`${num1} is ${result}% of ${num2}`,'<br>');

}
percentOf(2,4)

function findModulus(num1,num2){
    let result = (num2%num1);
    document.write(`${result} is the modulus of ${num1} and ${num2}`,'<br>');
}
findModulus(4,10)

function sumInput(){
  userInput = (prompt("Please Enter Numbers To Add. Please Seperate By Commas."));
  userInput = userInput.replaceAll(",", "+")
  let sum = eval(userInput)
  document.write(sum)
}
sumInput()


// The Rock, Paper, Scissors Game

// User Input Loop Till valid input

playerOne = prompt("Please Pick Rock, Paper, or Scissors.")
let playerChoice = playerOne.toLowerCase()

while (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
  playerChoice = prompt("Pick a valid choice")
  playerChoice = playerChoice.toLowerCase()
}
    
    

// Computer Randomly Generates Pick
let computer = Math.floor(Math.random() * 3)
let computerChoice = ''

if (computer === 0) {
  computerChoice = "rock";
} else if (computer === 1) {
    computerChoice = "paper";
} else {
  computerChoice = "scissors";
}


switch (playerChoice) {
  case "rock":
    if ("rock" === computerChoice){
      alert("Tie")
      break;
    } else if (computerChoice.length === 5){
      alert("Paper Beats Rock. You Lose")
      break;
    } else if (computerChoice.length === 8) {
      alert ("Rock Beats Scissors. You Win")
      break;
    }
  
  case "paper":
    if ("paper" === computerChoice){
      alert("Tie")
      break;
    } else if (computerChoice.length === 8){
      alert("Scissors Beats Paper. You Lose")
      break;
    } else if (computerChoice.length === 4) {
      alert ("Paper Beats Rock. You Win")
      break;
    }
  
  case "scissors":
    if ("scissors" === computerChoice){
      alert("Tie")
      break;
    } else if (computerChoice.length === 4){
      alert("Rock Beats Scissors. You Lose")
      break;
    } else if (computerChoice.length === 5) {
      alert ("Scissors Beats Paper. You Win")
      break;
    }   
}

// The Basic Calculator

function calc(){
  let condition = false;
  do{
    num1 = Number(prompt("Please Enter Your First Number."))
    num2 = Number(prompt("Please Enter Your Second Number."))
    opp = prompt("Would You Like To Add, Subtract, Multiply, or Divide The Two Numbers?")
    opp = opp.toLowerCase()
    if (opp === 'add' || opp === 'subtract' || opp === 'multiply' || opp ==='divide'){
      condition = true;   
      } else {
      condition = false;
      alert("Please Enter Your Numbers Again And Double Check The Opperation You'd Like To Perform")
      }
  } while (condition === false)


  switch(opp){
    case "add":
      add(num1, num2);
      break;
    case "subtract":
      sub(num1, num2);
      break;
    case "multiply":
      mult(num1, num2);
      break;
    case "divide":
      div(num1, num2);
      break;
  } 
}

function add(num1, num2){
  result = num1 + num2
  alert(result)
}

function sub(num1, num2){
  result = num1 - num2
  alert(result)
}

function mult(num1, num2){
  result = num1 * num2
  alert(result) 
}

function div(num1, num2){
  result = num1 / num2
  alert(result)
}

calc();