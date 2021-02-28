// Implement Array List

class ArrayList{
    constructor() {
        this.length = 0;
        this.data = {};
    }
    push(value) {
        this.data[this.length] = value;
        this.length++;
    }
    pop() {
        const deletedItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return deletedItem;
    }
    get(index) {
        return this.data[index];
    }
    delete(index) {
        const deletedItem = this.data[index];
        this._collapseTo(index);
        return deletedItem;
    }
    _collapseTo(index) {
        for (let i = index; i < this.length; i++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const arr = new ArrayList();
arr.push(23);
arr.push('bd');
arr.push('bd1');
arr.push(56);
arr.push('bd2');
let x = arr.delete(3);
console.log(arr, x);