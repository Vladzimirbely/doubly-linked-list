const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);

        if (this._head === null) {
            this._head = node;
            this._tail = node;
        } else {
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;
        }

        this.length += 1;
        return this;
    }

    head() {
        return this._head !== null ? this._head.data : null;
    }

    tail() {
        return this._tail !== null ? this._tail.data : null;
    }

    at(index) {
        let cur = this._head;

        while (index !== 0) {
            cur = cur.next;
            index--;
        }

        return cur.data;
    }

    insertAt(index, data) {
        if (this.length === 0) {
            this.append(data);
        }

        const node = new Node(data);
        const head = this._head;
        let i = 0;

        while (i < index - 1) {
            head = head.next;
            i++;
        }

        node.next = head.next;
        node.prev = head;
        head.next = node;
        this.length += 1;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;

        return this;
    }

    deleteAt(index) {
        let head = this._head;
        let i = 0;

        while (i < index) {
            head = head.next;
            i++;
        }

        const nextNode = head.next;
        const prevNode = head.prev;

        if (nextNode) {
            nextNode.prev = head.prev;
        }

        if (prevNode) {
            prevNode.next = head.next;
        }

        this.length -= 1;
        return this;
    }

    reverse() {
        const temp = this._head;
        let cur = this._head;
        let prev = null;
        let next = null;

        while (cur) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }

        this._head = this._tail;
        this._tail = temp;

        return this;
    }

    indexOf(data) {
        let cur = this._head;
        let i = 0;

        while (cur) {
            if(cur.data === data) {
                return i;
            }

            cur = cur.next;
            i++;
        }

        return -1;
    }
}

module.exports = LinkedList;
