const { version } = require("chai");

const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    
    let newArr = [];

    for (let y = 0; y < letters.length; y++) {
        
        for (let x = 0; x < letters[y].length -1; x++) {
            if (letters[y][x] === undefined) continue;
      if (newArr[x] === undefined) newArr[x] = [];
      newArr[x][y] = letters[y][x];
            
        }
    }
        
        const verticalJoin = newArr.map(ls => ls.join(''));
       
     
    for (let row of horizontalJoin) {
            if (row.includes(word)) {
            return true;
            } 
        } 

   for (let row of verticalJoin) {
            if (row.includes(word)) {
            return true;
       } 
  } return false

};




module.exports = wordSearch;

wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'FRANK')
