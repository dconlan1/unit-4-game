//set up a random number generator for the computer to pick a "random number". 
//set up a calculation of how to match the sum of the crystal outputs to the "random number."
//set up an assigned "number" for each crytal. 
//each assigned "number" needs to reset with each new game. 
//if the sum of the crystal outputs match the "random" number, then it's a win. 
//if the sum doesn't match it's a loss. 
//so, first we need to set up a few variables to hold the values.

$(document).ready(function(){

    var randomNumber = ""
    var crystalOutputs = ""

var randomNumber =[];

for (var i=19; i <120; i++){
    randomNumber.push(i);
}

var crystalOutputs = [];

for (var i =1; i<12; i++){
    crystalOutputs.push(i)
}

var wins = 0;
var losses = 0;
funtion pickRandomNumber (arr) {
    var 
}


}


var yourScore = document.getElementById('yourScore');
//var yourScore = getElementById(red, blue, yellow, green.onclick(math.sum));
yourScore.innerHTML = 0; //
var targetScore = document.getElementById('targetScore');
targetScore.innerHTML = getRandomValue(10, 4);

function addToScore(val) {
  var numberToAdd = parseInt(val);
  var currentScore = parseInt(yourScore.innerHTML);
  yourScore.innerHTML = numberToAdd + currentScore;
}

var red = document.getElementById("red");
//red.setAttribute("value", "5");
console.log(red.value);

var blue = document.getElementById("blue");
//console.log(blue.value);

var yellow = document.getElementById("yellow");
//console.log(yellow.value);

var green = document.getElementById("green");
//console.log(green.value);

// add an event listener to elements
red.addEventListener('click', function() {
  //this refers to red
  addToScore(this.value);
  checkPlayerScore();
});

//parseInt(42.01) => 42
//alert(parseInt('james')); // NaN (not a number)
// Cafe Del Mar ChillWave 2 :)
// .innerHTML returns a string, NaN

blue.addEventListener('click', function() {
  // this refers to blue
  addToScore(this.value);
  checkPlayerScore();
});

yellow.addEventListener('click', function() {
  // this refers to blue
  addToScore(this.value);
  checkPlayerScore();
});

green.addEventListener('click', function() {
  // this refers to blue
  addToScore(this.value);
  checkPlayerScore();
});
//var sum = parseInt(red.value) + parseInt(blue.value) + parseInt(yelow.value) + parseInt(green.value);

// console.log (sum);
function getRandomValue (a, b){
  return Math.floor((Math.random() * a) + b);
}

function checkPlayerScore() {
  //yourScore, targetScore (parseFloat() is for decimals)
  var playerInt = parseInt(yourScore.innerHTML);
  var targetInt = parseInt(targetScore.innerHTML);
  if (playerInt === targetInt) {
      alert('You win!');
  } else if (playerInt > targetInt) {
    alert('You lose!');
  } 
}

console.log(getRandomValue(10, 4));