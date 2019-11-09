class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.size++;
  }

  insertFront(element) {
    let node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }
  insertLast(element) {
    let node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      node.prev = current;
    }
    this.size++;
  }

  insertAt(element, index) {
    if (index && index > this.size) {
      return false;
    } else {
      let node = new Node(element);
      let itr = 0;
      let current = this.head;
      if (index === 0) {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
      } else {
        while (itr < index) {
          current = current.next;
          itr++;
        }
        node.prev = current;
        node.next = current.next;
        current.next = node;
      }
    }
  }

  delete(element) {
    if (this.size === 0) {
      return null;
    } else {
      let current = this.head;
      let prev;
      while (current != null) {
        if (current.element === element) {
          if (prev) {
            prev.next = current.next;
            if (current.nextS) current.next.prev = prev;
          } else {
            current = current.next;
            this.head = current;
          }

          break;
        }
        prev = current;
        current = current.next;
      }
      return current.element;
    }
  }

  printList() {
    let current = this.head;
    let res = "";
    while (current !== null) {
      res = res + current.element + " ";
      current = current.next;
    }
    return res;
  }
}

let dl = new DoublyLinkedList();
dl.insertLast(1);
dl.insertFront(2);
dl.insertFront(3);
dl.insertLast(4);
dl.insertAt(6, 0);
dl.insertAt(7, 3);

console.log(dl.printList());
dl.delete(6);
dl.delete(2);
dl.delete(4);
console.log(dl.printList());
