//make sure the page loads fully before executing. 

$(document).ready(function(){

//the ID tags: 
//<div id="total-score">0; 
//<div id="computer-guess">
//<div id="your-total-score">Your total score is:</p>; 
// <div id="ruby">
// <div id="diamond">
//<div id="emerald">
//<div id="saphire">
//<div id="your-total-score">
//<div id="total-score">

//set up a random number generator for the computer to pick a "random number". 

//set up a calculation of how to match the sum of the crystal outputs to the "random number."

//set up an assigned "number" for each crytal. 

var ruby = document.getElementById("ruby");
ruby.addEventListener("click", function(){
    addToScore(this.value);
    checkPlayerScore();
})
var diamond = document.getElementById("diamond");
diamond.addEventListener("click", function(){
    addToScore(this.value);
    checkPlayerScore();
})
var emerald = document.getElementById("emerald");
emerald.addEventListener('click', function(){
    addToScore(this.value);
    checkPlayerScore();
} )
var saphire = document.getElementById("saphire");
saphire.addEventListener('click', function(){
    addToScore(this.value);
    checkPlayerScore();
})
//each assigned "number" needs to reset with each new game. 

//if the sum of the crystal outputs match the "random" number, then it's a win. 

//if the sum doesn't match it's a loss. 
//so, first we need to set up a few variables to hold the values.

}
//THIS MARKS THE LAST LINE IN CODE.