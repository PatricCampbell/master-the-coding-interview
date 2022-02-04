var QueueNode = /** @class */ (function () {
    function QueueNode(value) {
        this.value = value;
        this.next = null;
    }
    return QueueNode;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    Queue.prototype.peek = function () {
        return this.first;
    };
    Queue.prototype.enqueue = function (value) {
        var newNode = new QueueNode(value);
        if (!this.first || !this.last) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            var oldLast = this.last;
            oldLast.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    };
    Queue.prototype.dequeue = function () {
        if (!this.first) {
            return null;
        }
        else {
            var oldFirst = this.first;
            this.first = oldFirst.next;
            this.length--;
            return oldFirst.value;
        }
    };
    Queue.prototype.isEmpty = function () {
        return this.length === 0;
    };
    return Queue;
}());
