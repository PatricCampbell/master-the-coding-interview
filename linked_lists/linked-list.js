"use strict";
exports.__esModule = true;
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(value) {
        this.value = value;
        this.next = null;
    }
    return LinkedListNode;
}());
;
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    LinkedList.prototype.append = function (value) {
        var newTail = new LinkedListNode(value);
        this.tail.next = newTail;
        this.tail = newTail;
        this.length++;
        return this;
    };
    LinkedList.prototype.prepend = function (value) {
        var oldHead = Object.assign({}, this.head);
        var newHead = new LinkedListNode(value);
        newHead.next = oldHead;
        this.head = newHead;
        this.length++;
        return this;
    };
    LinkedList.prototype.toString = function () {
        var array = [];
        var currentNode = this.head;
        while (currentNode) {
            array.push(currentNode.value);
            if (currentNode.next) {
                currentNode = currentNode.next;
            }
            else {
                currentNode = null;
            }
        }
        return array.toString();
    };
    LinkedList.prototype.insert = function (index, value) {
        var currentNode = this.head;
        var nodeCount = 0;
        var newNode = new LinkedListNode(value);
        if (index === 0) {
            this.prepend(value);
            return this;
        }
        if (index >= this.length) {
            this.append(value);
            return this;
        }
        while (nodeCount < index - 1 && currentNode.next) {
            currentNode = currentNode.next;
            nodeCount++;
        }
        var formerNextNode = Object.assign({}, currentNode.next);
        currentNode.next = newNode;
        newNode.next = formerNextNode;
        return this;
    };
    LinkedList.prototype.remove = function (index) {
        var currentNode = this.head;
        var previousNode = new LinkedListNode(null);
        var nodeCount = 0;
        if (index === 0) {
            var formerNextNode = Object.assign({}, currentNode.next);
            this.head = formerNextNode;
            return this;
        }
        while (nodeCount < index && currentNode.next) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            nodeCount++;
        }
        previousNode.next = currentNode.next;
        return this;
    };
    return LinkedList;
}());
var myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(25);
myLinkedList.prepend(69);
myLinkedList.insert(3, 420);
console.log(myLinkedList.toString());
myLinkedList.remove(1);
console.log(myLinkedList.toString());
exports["default"] = LinkedList;
