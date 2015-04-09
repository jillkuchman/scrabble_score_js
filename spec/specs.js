describe('scrabbleScore', function() {
    it("will return 1 if the user inputs the letter a", function() {
        expect(scrabbleScore("a")).to.equal(1);
    });
    it("will return 1 if the user inputs a one-letter input of any of the letters worth 1 point", function() {
        expect(scrabbleScore("e")).to.equal(1);
    });
    it("will return 2 if the user inputs a one-letter input of any of the letters worth 2 points", function() {
        expect(scrabbleScore("d")).to.equal(2);
    });
    it("will return 3 if the user inputs a one-letter input of any of the letters worth 3 points", function() {
        expect(scrabbleScore("b")).to.equal(3);
    });
    it("will return 4 if the user inputs a one-letter inpust of any of the letters worth 4 points", function() {
        expect(scrabbleScore("y")).to.equal(4);
    });
    it("will return 5 if the user inputs a one-letter input of any of the letters worth 5 points", function() {
        expect(scrabbleScore("k")).to.equal(5);
    });
    it("will return 8 if the user inputs a one-letter input of any of the letters worth 8 points", function() {
        expect(scrabbleScore("j")).to.equal(8);
    });
    it("will return 10 if the user inputs a one-letter input of any of the letters worth 10 points", function(){
        expect(scrabbleScore("q")).to.equal(10);
    });
    it("will return 2 if the user inputs so", function() {
        expect(scrabbleScore("so")).to.equal(2);
    });
});
