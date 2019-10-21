  $( document ).ready(function(){
  // Generates random number to guess
  var Random=Math.floor(Math.random()*102+19)
  
  // Display random number
  $('#computerGuess').text(Random);
  
  //Generate random number for each crystal
  var ruby= Math.floor(Math.random()*12+1)
  var diamond= Math.floor(Math.random()*12+1)
  var emerald= Math.floor(Math.random()*12+1)
  var saphire= Math.floor(Math.random()*12+1)
  
  // Variables to keep track of wins, losses and total
  var playerTotal= 0; 
  var wins= 0;
  var losses = 0;
  

$('#winWin').text(wins);
$('#lossLoss').text(losses);

// Reset game
function reset(){
      Random=Math.floor(Math.random()*102+19);
      console.log(Random)
      $('#computerGuess').text(Random);
      ruby= Math.floor(Math.random()*12+1);
      diamond= Math.floor(Math.random()*12+1);
      emerald= Math.floor(Math.random()*12+1);
      saphire= Math.floor(Math.random()*12+1);
      playerTotal= 0;
      $('#total-score').text(playerTotal);
      } 
// Display wins
function woohoo(){
alert("Congrats! You won!");
  wins++; 
  $('#winWin').text(wins);
  reset();
}
// Display losses
function loser(){
alert ("Sorry! You lose!");
  losses++;
  $('#lossLoss').text(losses);
  reset()
}
// Clicking crystals
  $('.ruby').on ('click', function(){
    playerTotal = playerTotal + ruby;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal); 
          //Win & lose conditions
        if (playerTotal == Random){
          woohoo();
        }
        else if ( playerTotal > Random){
          loser();
        }   
  })  
  $('.diamond').on ('click', function(){
    playerTotal = playerTotal + diamond;
    console.log("New playerTotal= " + playerTotal);
    $('#total-score').text(playerTotal); 
        if (playerTotal == Random){
          woohoo();
        }
        else if ( playerTotal > Random){
          loser();
        } 
  })  
  $('.emerald').on ('click', function(){
    playerTotal = playerTotal + emerald;
    console.log("New playerTotal= " + playerTotal);
    $('#total-score').text(playerTotal);

          if (playerTotal == Random){
          woohoo();
        }
        else if ( playerTotal > Random){
          loser();
        } 
  })  
  $('.saphire').on ('click', function(){
    playerTotal = playerTotal + saphire;
    console.log("New playerTotal= " + playerTotal);
    $('#total-score').text(playerTotal); 
      
          if (playerTotal == Random){
          woohoo();
        }
        else if ( playerTotal > Random){
          loser();
        }
  });   
}); 