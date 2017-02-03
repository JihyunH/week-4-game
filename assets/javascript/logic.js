// GLOBAL VARIABLES
// ---------------------------------------------------------------------

// Crystal Variales
var crystal = {
	blue: 
	{
		name: "Blue",
		value: 0
	},
	white: 
	{
		name: "White",
		value: 0
	},
	red: 
	{
		name: "Red",
		value: 0
	},
	yellow: 
	{
		name: "Yellow",
		value: 0
	},
};

// Scores (Current and Target)
var currentScore  = 0; 
var targetScore   = 0;

// Wins and Losses
var winCount      = 0;
var lossCount     = 0;


// FUNCTIONS
// ---------------------------------------------------------------------

// Helper Function for getting random numbers
var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Stars the Game (and restarts the game)
var startGame = function() {


	// Reset the Current Score
	currentScore = 0;

	// Set a new Target Score (between 19 and 120)
	// ex1)targetScore = Math.floor(Math.random() * (max - min + 1)) + min;
	// ex2)targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	targetScore = getRandom(19, 120);

	// Set different values for each of the crystals (between 1 and 12)
	crystal.blue.value    = getRandom(1, 12);
	crystal.white.value   = getRandom(1, 12);
	crystal.red.value     = getRandom(1, 12);
	crystal.yellow.value  = getRandom(1, 12);

	// Change the HTML to reflect all of these changes
	$('#yourScore').html(currentScore);
	$('#targetScore').html(targetScore);

	// Testing Console
	console.log("----------------------------------------------")
	console.log("Target Score " + targetScore);
	console.log("Blue: " + crystal.blue.value + " | White: " + crystal.white.value + " | Red: " + crystal.red.value + " | Yellow: " + crystal.yellow.value);
	console.log("----------------------------------------------")
}

// Respond to click on crystals
var addValues = function(crystal) {

		// Change currentScore
		currentScore = currentScore + crystal.value;

		// Change the HTML to reflect changes in currentScore
		$('#yourScore').html(currentScore);

		// Call the checkWin function
		checkWin();

		// Testing Console
		console.log("Your Score: " + currentScore);

}

// Check if User Won or Lost and Reset the Game
var checkWin = function() {

	// Check if currentScore is larger than targetScore
	if(currentScore > targetScore) {
		alert("Sorry, You lost!");
		console.log("You Lost");
	
		// Add to loss Counter
		lossCount++;

		// Change Loss Count HTML
		$('#lossCount').html(lossCount);

		// Restart the Game
		startGame();

	}




	else if (currentScore == targetScore) {
		alert("Congratulations! You Won!");
		console.log("You Won!");
		
		// Add to win Counter
		winCount++;	

		// Change Win Count HTML
		$('#winCount').html(winCount);

		// Restart the Game
		startGame();

	}


}


// MAIN PROCESS
// ---------------------------------------------------------------------

// Starts the Game the First time.
startGame();

$('#blue').click(function() {
	addValues(crystal.blue);
});
$('#white').click(function() {  
	addValues(crystal.white);
});
$('#red').click(function() {
	addValues(crystal.red);
});
$('#yellow').click(function() {
	addValues(crystal.yellow);
});
