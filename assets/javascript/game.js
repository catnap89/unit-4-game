/* Pseudocoding

1. The app generates random number between 19 and 120 and display the number
  <h3 class="rng">
2. There are 4 crystals. Each crystals are assigned to a random number between 1 and 12.
  <img class="r-crystal"> ... r b y g-crystal
3. When user clicks the crystal, the number shows on the score section.
  <p class="total-score">
4. Clicking more crystals add the number assigned to that crystal on top of the score.
5. If user score matches app generated random number, user gets 1 points on win counter.
  <p class="wins">
6. If user score exceeds over the app generated random number, user gets 1 points on losses counter.
  <p class-"losses">
7. Either the user wins or loses, app generates new random number between 19 - 120.
8. Either the user wins or loses, each crystals are assigned to a new random number between 1 - 12.

*/

// VARIABLES //
// =====================================================

var randomNumber = Math.floor(Math.random() * 102) + 19; 

var crystalNumRed = Math.floor(Math.random() * 12) + 1;

var crystalNumBlue = Math.floor(Math.random() * 12) + 1;

var crystalNumYellow = Math.floor(Math.random() * 12) + 1;

var crystalNumGreen = Math.floor(Math.random() * 12) + 1;

var totalScore = 0;

var wins = 0;

var losses = 0;

// =====================================================

$(".rng").text(randomNumber); // Random Number to match

// When user click red crystal, add number generated by crystalNumRed variable to the totalScore.
$(".r-crystal").on("click", function() {

  totalScore += crystalNumRed;
  $(".total-score").text(totalScore);

  winLoseCondition();

});

// When user click blue crystal, add number generated by crystalNumBlue variable to the totalScore.
$(".b-crystal").on("click", function() {

  totalScore += crystalNumBlue;
  $(".total-score").text(totalScore);

  winLoseCondition();

});

// When user click yellow crystal, add number generated by crystalNumYellow variable to the totalScore.
$(".y-crystal").on("click", function() {

  totalScore += crystalNumYellow;
  $(".total-score").text(totalScore);

  winLoseCondition();

});

// When user click green crystal, add number generated by crystalNumGreen variable to the totalScore.
$(".g-crystal").on("click", function() {

  totalScore += crystalNumGreen;
  $(".total-score").text(totalScore);

  winLoseCondition();

});

$(".total-score").text(totalScore); // This is to display 0 as total score when the game start.


function winLoseCondition (){

  if (totalScore === randomNumber) {
    wins++;
    restart();
  } 

  if (totalScore > randomNumber) {
    losses++
    restart();
  }

  $(".wins").text("Wins: " + wins);
  $(".losses").text("Losses: " + losses);
};

// Resets random number to match, random numbers assigned to each crystals, total score.
function restart() {
  randomNumber = Math.floor(Math.random() * 102) + 19;
  // console.log(randomNumber);
  crystalNumRed = Math.floor(Math.random() * 12) + 1;
  // console.log(crystalNumRed);
  crystalNumBlue = Math.floor(Math.random() * 12) + 1;
  // console.log(crystalNumBlue);
  crystalNumYellow = Math.floor(Math.random() * 12) + 1;
  // console.log(crystalNumYellow);
  crystalNumGreen = Math.floor(Math.random() * 12) + 1;
  // console.log(crystalNumGreen);
  totalScore = 0;
  $(".total-score").text(totalScore);
  $(".rng").text(randomNumber);
}

