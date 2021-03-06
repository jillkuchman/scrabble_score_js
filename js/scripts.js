function scrabbleScore(input) {
    var points = { a:1, e: 1, i: 1, o: 1, u:1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10};

    var counter = 0;
    var input_lc = input.toLowerCase();
    var input_letters = input_lc.replace(/[^a-z]/g, "");


    var input_array = input_letters.split('');
    input_array.forEach(function(letter){
        counter += points[letter];
    });

    return counter;
};

$(document).ready(function() {
    $("form#scrabble").submit(function(event){
        var input = $("input#user_input").val();
        console.log("input: " + input);
        var score = scrabbleScore(input);

        $("#result").show();
        $(".input_word").text(input);
        $(".score").text(score);

        event.preventDefault();
    });
});
