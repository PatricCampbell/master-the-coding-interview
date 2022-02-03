class LinkedListNode {
  value: any;
  next: LinkedListNode | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }  
};

class LinkedList {
  head: LinkedListNode;
  tail: LinkedListNode;
  length: number;

  constructor(value: any) {
    this.head = {
      value,
      next: null,
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value: any) {
    const newTail = new LinkedListNode(value);
    
    this.tail.next = newTail;
    this.tail = newTail;

    this.length++;

    return this;
  }

  prepend(value: any) {
    const oldHead = Object.assign({}, this.head);
    const newHead = new LinkedListNode(value);

    newHead.next = oldHead;
    this.head = newHead;

    this.length++;

    return this;
  }

  toString() {
    const valuesArray = [];
    let currentNode: LinkedListNode | null = this.head;

    while (currentNode) {
      valuesArray.push(currentNode.value);

      if (currentNode.next) {
        currentNode = currentNode.next;
      } else {
        currentNode = null;
      }
    }

    return valuesArray.toString();
  }

  insert(index: number, value: any) {
    let currentNode: LinkedListNode | null = this.head;
    let nodeCount = 0;
    const newNode = new LinkedListNode(value);

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
    currentNode.next = newNode;
    newNode.next = formerNextNode;

    return this;
  }

  remove(index: number) {
    let currentNode: LinkedListNode | null = this.head;
    let previousNode = new LinkedListNode(null);
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

    this.length--;

    return this;
  }

  reverse() {
    let currentNode: LinkedListNode | null = this.head;
    const valuesArray = [];
    const reversedLinkedList = new LinkedList(this.tail.value);

    while (currentNode) {
      valuesArray.push(currentNode.value);

      if (currentNode.next) {
        currentNode = currentNode.next;
      } else {
        currentNode = null;
      }
    }

    for (let index = valuesArray.length - 2; index >= 0; index--) {
      const element = valuesArray[index];

      reversedLinkedList.append(element);
    }

    return reversedLinkedList;
  }
}

export default LinkedList;
