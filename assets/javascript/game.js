
        var alphabet = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // Variables for tracking our wins, losses and ties. They begin at 0.
    var wins = 0;
    var losses = 0;
    var guesses = 10;
    var usedArray = [];


    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerChoice)

    // When the user presses a key, check if the key is identical if  key is identical  W +1 else L + 1...

    document.onkeypress = function (event) {
        var userGuess = event.key;
        console.log(userGuess);
        // this is the correct guess 
        if (userGuess === computerChoice) {
            wins++;
            guesses = 10;
            
            
            
            console.log(computerChoice);
            
            //wrong choice will minus 1 from guesses
        } if (userGuess !== computerChoice) {
            guesses--;
        }

        // computerchoices reset after 10 wrong guesses and adds +1 to losses
        if (guesses === 0) {
            losses++;
            usedArray = [];
            guesses = 10;
        }

        document.getElementById('wins').innerHTML = wins;
        document.getElementById('losses').innerHTML = losses;
        document.getElementById('guesses').innerHTML = guesses;

    }


