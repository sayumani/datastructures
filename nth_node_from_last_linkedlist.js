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

  nthNodeFromLast(n) {
      let length = this.size - n ;
      let current = this.head ;
      let itr = 0 ;
      if( n && n > this.size){
          return null
      }else{
        while(itr < length){
            current = current.next ;
            itr ++ ;
        }
      }
      return current.element;
  }
}

let ll = new LinkedList();
ll.addFront(1);
ll.addFront(2);
ll.addFront(3);
ll.addFront(4);
ll.addFront(5);
ll.addFront(6);
ll.addFront(7);
ll.addFront(8);
ll.addFront(9);
ll.addFront(10);
console.log(ll.nthNodeFromLast(10));
