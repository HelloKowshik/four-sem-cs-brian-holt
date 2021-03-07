// Hash Table

class HashTableSet {
    constructor() {
      this.table = new Array(255);
    }
    add(input) {
      this.table[this.hash(input, 255)] = input;
    }
    check(input) {
      return !!this.table[this.hash(input, 255)];
    }
    hash(input, max) {
      let num = 0;
      for (let i = 0; i < input.length; i++) {
        num += input.charCodeAt(i) * i;
      }
      return num % max;    
    }
}
const table = new HashTableSet();
table.add('hi');
table.add('this is fun');
table.add('another thing');
console.log(table, table.check('another thing in the tab'));