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
});
