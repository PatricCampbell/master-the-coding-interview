class QueueNode {
  value: any;
  next: QueueNode | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  first: QueueNode | null;
  last: QueueNode | null;
  length: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek(): QueueNode | null {
    return this.first;
  }

  enqueue(value: any): Queue {
    const newNode = new QueueNode(value);

    if (!this.first || !this.last) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const oldLast = this.last;

      oldLast.next = newNode;
      this.last = newNode;
    }

    this.length++;

    return this;
  }

  dequeue(): any {
    if (!this.first) {
      return null;
    } else {
      const oldFirst = this.first;

      this.first = oldFirst.next;

      this.length--;

      return oldFirst.value;
    }
  }

  isEmpty(): boolean {
    return this.length === 0;
  }
}
