
class Scrabble {
    constructor(word) {
        // Check if the word that was passed in doesn't contain any numbers
        // Else convert to upper case 
      if (typeof word === 'string') { 
        this.word = word.toUpperCase;
      } else { 
        console.log ('You must input a word')
        }
      }
    }

    // Some data structure to hold the score value according to each letter

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
    
function CheckScore(letter) 
    
    // Function to check score 
      
        // Iterate through each letter and add up the score 


        // return the total score

let game = new Scrabble('game');
console.log(game.CheckScore());

module.exports = Scrabble
