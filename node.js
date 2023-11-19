class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    pointToNext(next) {
        this.next = next;
    }
}

module.exports = Node