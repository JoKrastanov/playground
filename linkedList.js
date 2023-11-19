const Node = require("./node")

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtBeginning(data) {
        let newNode = new Node(data);
        if(this.head) {
            newNode.pointToNext(this.head);
            this.head = newNode;
            return;
        }
        this.head = newNode;
        this.tail = newNode;
    }

    insertAtEnd(data) {
        let newNode = new Node(data)
        if(this.head) {
            this.tail.next = newNode;
            this.tail = newNode;
            return;
        }
        this.head = newNode;
        this.tail = newNode;
    }

    search(data) {
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.data === data) return true;
            currentNode = currentNode.next;
        }
        return false;
    }

    reverse() {
        let currentNode = this.head;
        let prevNode, nextNode = null; 

        while(currentNode) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        this.head = prevNode;
        return this;
    }

    print() {
        let currentNode = this.head;
        while(currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}

module.exports = LinkedList