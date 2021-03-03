// Binary Search Tree - Partial Implementation

class BST{ 
    constructor() {
        this.root = null;
    }
    toObject() {
        return this.root;
    }
    add(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return;
        }
        let current = this.root;
        while (true) {
            if (current.value > value) {        //go left
                if (current.left) {
                    current = current.left;
                } else {
                    current.left = new Node(value);
                    return;
                }

            } else {                            //go right
                if (current.right) {
                    current = current.right;
                } else {
                    current.right = new Node(value);
                    return;
                }
            }
        }
    }
    
}


class Node{ 
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const bst = new BST();
bst.add(5);
bst.add(3);
bst.add(2);
bst.add(6);
console.log(bst);