
class Scrabble {
    constructor(word) {
      if (typeof word === 'string') { 
        this.word = word.toUpperCase;
      } else { 
        console.log ('You must input a word')
        }
      }
}
  switch (letter) {
    case 'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T':
      return 1
    case 'D', 'G':
      return 2
    case 'B', 'C', 'M', 'P':
      return 3
    case 'F', 'H', 'V', 'W', 'Y':
      return 4
    case 'K':
      return 5
    case 'J', 'X':
        return 8
    case 'Q', 'Z':
        return 10
    default:
        return 0
  }
    
let score = 
    letter.reduce ((previousValue, currentValue) => { 
        return previousValue + currentValue})
    
let game = new Scrabble('game');
console.log(game.score());

module.exports = Scrabble
