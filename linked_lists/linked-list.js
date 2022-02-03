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
        var valuesArray = [];
        var currentNode = this.head;
        while (currentNode) {
            valuesArray.push(currentNode.value);
            if (currentNode.next) {
                currentNode = currentNode.next;
            }
            else {
                currentNode = null;
            }
        }
        return valuesArray.toString();
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
        this.length--;
        return this;
    };
    LinkedList.prototype.reverse = function () {
        var currentNode = this.head;
        var valuesArray = [];
        var reversedLinkedList = new LinkedList(this.tail.value);
        while (currentNode) {
            valuesArray.push(currentNode.value);
            if (currentNode.next) {
                currentNode = currentNode.next;
            }
            else {
                currentNode = null;
            }
        }
        for (var index = valuesArray.length - 2; index >= 0; index--) {
            var element = valuesArray[index];
            reversedLinkedList.append(element);
        }
        return reversedLinkedList;
    };
    return LinkedList;
}());
exports["default"] = LinkedList;
