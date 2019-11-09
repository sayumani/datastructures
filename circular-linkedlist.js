class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  insert(element) {
    let node = new Node(element);
    let current = this.head;
    if (this.head === null) {
      this.head = node;
      this.head.next = null;
    } else {
      let itr = 0;
      while (itr < this.size - 1) {
        current = current.next;
        itr++;
      }
      current.next = node;
      node.next = this.head;
    }
    this.size++;
  }

  printList() {
    let curr = this.head;
    let str = "";
    let itr = 0;
    while (itr < this.size) {
      str += curr.element + " ";
      curr = curr.next;
      itr++;
    }
    console.log(str);
  }
  isCircular() {
    let map = new Map();
    let slow = this.head;
    let fast = this.head;
    while(fast && fast.next){
        fast =fast.next.next ;
        slow =slow.next;
        if(fast === slow){
          return true
        }
    }
    return false;
  }
}

let cl = new CircularLinkedList();
cl.insert(6);
cl.insert(7);
cl.insert(9);
cl.insert(10);
cl.printList();
console.log("LinkedList is circular :" + cl.isCircular());
