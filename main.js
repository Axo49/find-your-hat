const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field ) {
      this.field = field;
      this.x = 0;
      this.y = 0;
      
    }
}