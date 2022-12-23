class Scrabble {
  constructor(word) {
    this.word = word;
    this.valueOne = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
    this.valueTwo = ["D", "G"];
    this.valueThree = ["B", "C", "M", "P"];
    this.valueFour = ["F", "H", "V", "W", "Y"];
    this.valueFive = ["K"];
    this.valueEight = ["J", "X"];
    this.valueTen = ["Q", "Z"];
    this.finalScore = 0;
  }

  score() {
    this.word = this.word.toUpperCase();

    if (this.word === null) {
      return this.finalScore();
    }

    for (let i = 0; i < this.word.length; i++) {
      if (this.valueOne.includes(this.word.charAt(i))) {
        this.finalScore += 1;
      } else if (this.valueTwo.includes(this.word.charAt(i))) {
        this.finalScore += 2;
      } else if (this.valueThree.includes(this.word.charAt(i))) {
        this.finalScore += 3;
      } else if (this.valueFour.includes(this.word.charAt(i))) {
        this.finalScore += 4;
      } else if (this.valueFive.includes(this.word.charAt(i))) {
        this.finalScore += 5;
      } else if (this.valueEight.includes(this.word.charAt(i))) {
        this.finalScore += 8;
      } else if (this.valueTen.includes(this.word.charAt(i))) {
        this.finalScore += 10;
      }
    }
    return this.finalScore;
  }
}

module.exports = Scrabble;

scrabble = new Scrabble('hello');
scrabble.score();
