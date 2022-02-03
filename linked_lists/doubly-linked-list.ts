class DoublyLinkedListNode {
  value: any;
  next: DoublyLinkedListNode | null;
  previous: DoublyLinkedListNode | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }  
};

class DoublyLinkedList {
  head: DoublyLinkedListNode;
  tail: DoublyLinkedListNode;
  length: number;

  constructor(value: any) {
    this.head = {
      value,
      next: null,
      previous: null,
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value: any) {
    const newTail = new DoublyLinkedListNode(value);
    
    this.tail.next = newTail;
    newTail.previous = this.tail;
    this.tail = newTail;

    this.length++;

    return this;
  }

  prepend(value: any) {
    const oldHead = Object.assign({}, this.head);
    const newHead = new DoublyLinkedListNode(value);

    newHead.next = oldHead;
    oldHead.previous = newHead;
    this.head = newHead;

    this.length++;

    return this;
  }

  toString() {
    const array = [];
    let currentNode: DoublyLinkedListNode | null = this.head;

    while (currentNode) {
      array.push(currentNode.value);

      if (currentNode.next) {
        currentNode = currentNode.next;
      } else {
        currentNode = null;
      }
    }

    return array.toString();
  }

  insert(index: number, value: any) {
    let currentNode: DoublyLinkedListNode | null = this.head;
    let nodeCount = 0;
    const newNode = new DoublyLinkedListNode(value);

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

    const formerNextNode = Object.assign({}, currentNode.next);
    formerNextNode.previous = currentNode;
    currentNode.next = newNode;
    newNode.next = formerNextNode;
    newNode.previous = currentNode;

    return this;
  }

  remove(index: number) {
    let currentNode: DoublyLinkedListNode | null = this.head;
    let previousNode = new DoublyLinkedListNode(null);
    let nodeCount = 0;

    if (index === 0) {
      const formerNextNode = Object.assign({}, currentNode.next);
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
  }
}

export default DoublyLinkedList;
