// Implement Linked List

class LinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) { 
        const node = new Node(value);
        this.length++;
        if (!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
    }
    pop() { 
        return this.delete(this.length - 1);
    }
    _find(value, test = this._test) { 
        let current = this.head;
        let i = 0;
        while (current) {
            if (test(value, current.value, i, current)) {
                return current;
            }
            current = current.next;
            i++;
        }
        return null;
    }
    _test(a, b) { 
        return a === b;
    }
    _testIndex(search, __, i) {
        return search === i;
     }
    get(index) { 
        const node = this._find(index, this._testIndex);
        if (!node) return null;
        return node.value;
    }
    delete(index) {
        if (index === 0) {
            const head = this.head;
            if (head) {
                this.head = head.next;
            } else {
                this.head = null;
                this.tail = null;
            }
            this.length--;
            return head.value;
        }
        const node = this._find(index - 1, this._testIndex);
        const excise = node.next;
        if (!excise) return null;
        node.next = excise.next;
        if (node.next && !node.next.next) {
            this.tail = node.next;
        }
        this.length--;
        return excise.value;
     }
    
}

class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const list1 = new LinkedList();
list1.push(123);
list1.push(1231);
let p = list1._find(12312);
let q = list1.get(1);
let r = list1.pop();
list1.push('i am back');
console.log(list1, 'pop: ', r);
// console.log(list1, 'GOT: ', p, 'GET: ', q);