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

  addAtEnd(element) {
    let node = new Node(element);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
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
  insertAt(element ,index) {
    let node = new Node(element);
    let current, prev;
    if (index > 0 && index > this.size) {
      return false;
    }
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let itr = 0;
      current = this.head;
      while (itr < index) {
        prev = current;
        current = current.next;
        itr++;
      }
      prev.next = node;
      node.next = current;
    }
    this.size++;
  }
  removeFromIndex(index) {
    let current, prev;
    let itr = 0;
    if (index > 0 && index > this.size) {
      return false;
    } else {
      current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        while (itr < index) {
          prev = current;
          current = current.next;
          itr++;
        }
        prev.next = current.next;
      }
    }
    this.size--;
    return current.element;
  }

  removeElement(element) {
    let prev = null,
      current;
    current = this.head;
    while (current.next) {
      if (current.element === element) {
        if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;
    while (current != null) {
      if (current.element === element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  isEmpty() {
    return this.size == 0;
  }
  size_of_list() {
    console.log(this.size);
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

// creating an object for the 
// Linkedlist class 
var ll = new LinkedList(); 
  
// testing isEmpty on an empty list 
// returns true 
console.log(ll.isEmpty()); 
  
// adding element to the list 
ll.addAtEnd(10); 
  
// prints 10 
ll.printList(); 
  
// returns 1 
console.log(ll.size_of_list()); 
  
// adding more elements to the list 
ll.addAtEnd(20); 
ll.addAtEnd(30); 
ll.addAtEnd(40); 
ll.addAtEnd(50); 
  
// returns 10 20 30 40 50 
ll.printList(); 
  
// prints 50 from the list 
console.log("is element removed ?" + ll.removeElement(50)); 
  
// prints 10 20 30 40 
ll.printList(); 
  
// returns 3 
console.log("Index of 40 " + ll.indexOf(40)); 
  
// insert 60 at second position 
// ll contains 10 20 60 30 40 
ll.insertAt(60, 2); 
  
ll.printList(); 
  
// returns false 
console.log("is List Empty ? " + ll.isEmpty()); 
  
// remove 3rd element from the list 
console.log(ll.removeFromIndex(3)); 
  
// prints 10 20 60 40 
ll.printList(); 

console.log("LinkedList is circular :" + ll.isCircular());