"use strict";
exports.__esModule = true;
var StackNode = /** @class */ (function () {
    function StackNode(value) {
        this.value = value;
        this.next = null;
    }
    return StackNode;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    Stack.prototype.peek = function () {
        return this.top;
    };
    Stack.prototype.push = function (value) {
        var newTop = new StackNode(value);
        if (!this.top) {
            this.bottom = newTop;
            this.top = newTop;
        }
        else {
            var oldTop = this.top;
            this.top = newTop;
            this.top.next = oldTop;
        }
        this.length++;
        return newTop;
    };
    Stack.prototype.pop = function () {
        if (!this.top) {
            return null;
        }
        var oldTop = this.top;
        var newTop = oldTop.next;
        this.top = newTop;
        this.length--;
        return oldTop.value;
    };
    Stack.prototype.isEmpty = function () {
        return this.length > 0;
    };
    return Stack;
}());
exports["default"] = Stack;
