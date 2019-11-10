class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addFront(element) {
    let node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  printList() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}


let ll1 = new LinkedList();
ll1.addFront(1);
ll1.addFront(2);
ll1.addFront(3);
ll1.addFront(4);
ll1.addFront(5);
ll1.printList();
ll1.reverse();
ll1.printList();