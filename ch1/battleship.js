
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;


while (isSunk == false) {
    
    guess = prompt("Enter a number between 0 and 6:");

    if (guess < 0 || guess > 6) {
        alert("Please enter a valid number!")
    } else {
        guesses++;
    }

    if (guess == location1 || guess == location2 || guess == location3) {
        alert("HIT!")
        hits++;
    
    } else {
        alert("MISS!");
        
    } if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship");
        var stats = "It took you " + guesses + " guesses to sink the battleship, which means your shooting accuracy was " + (3/guesses);
        alert(stats);
    }
   
}