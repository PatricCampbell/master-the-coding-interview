class StackNode {
  value: any;
  next: StackNode | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  top: StackNode | null;
  length: number;

  constructor() {
    this.top = null;
    this.length = 0;
  }

  peek(): StackNode | null {
    return this.top;
  }

  push(value: any): StackNode {
    const newTop = new StackNode(value);

    if (!this.top) {
      this.top = newTop;
    } else {
      const oldTop = this.top;

      this.top = newTop;
      this.top.next = oldTop;
    }

    this.length++;

    return newTop;
  }

  pop(): any {
    if (!this.top) {
      return null;
    }

    const oldTop = this.top;
    const newTop = oldTop.next;

    this.top = newTop;

    this.length--;

    return oldTop.value;
  }

  isEmpty(): boolean {
    return this.length > 0;
  }
}

export default Stack;
