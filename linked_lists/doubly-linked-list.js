"use strict";
exports.__esModule = true;
var DoublyLinkedListNode = /** @class */ (function () {
    function DoublyLinkedListNode(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
    return DoublyLinkedListNode;
}());
;
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList(value) {
        this.head = {
            value: value,
            next: null,
            previous: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    DoublyLinkedList.prototype.append = function (value) {
        var newTail = new DoublyLinkedListNode(value);
        this.tail.next = newTail;
        newTail.previous = this.tail;
        this.tail = newTail;
        this.length++;
        return this;
    };
    DoublyLinkedList.prototype.prepend = function (value) {
        var oldHead = Object.assign({}, this.head);
        var newHead = new DoublyLinkedListNode(value);
        newHead.next = oldHead;
        oldHead.previous = newHead;
        this.head = newHead;
        this.length++;
        return this;
    };
    DoublyLinkedList.prototype.toString = function () {
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
    DoublyLinkedList.prototype.insert = function (index, value) {
        var currentNode = this.head;
        var nodeCount = 0;
        var newNode = new DoublyLinkedListNode(value);
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
        formerNextNode.previous = currentNode;
        currentNode.next = newNode;
        newNode.next = formerNextNode;
        newNode.previous = currentNode;
        return this;
    };
    DoublyLinkedList.prototype.remove = function (index) {
        var currentNode = this.head;
        var previousNode = new DoublyLinkedListNode(null);
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
        previousNode.previous = currentNode.previous;
        this.length--;
        return this;
    };
    return DoublyLinkedList;
}());
exports["default"] = DoublyLinkedList;
