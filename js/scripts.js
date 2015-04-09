function scrabbleScore(input) {
    var onepoint = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
    var twopoint = ["d", "g"];
    
    var counter = 0;

    onepoint.forEach(function(letter) {
        if (letter === input) {
            counter += 1;
        }
    });

    twopoint.forEach(function(letter) {
        if (letter === input) {
            counter += 2;
        }
    });

    return counter;
};
