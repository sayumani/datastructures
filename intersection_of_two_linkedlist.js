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
}

function findInterSection(list1, list2) {
  let current1 = list1.head;
  let current2 = list2.head;
  let map = new Map();
  let found = false;
  while (current1 != null) {
    map.set(current1, true);
    current1 = current1.next;
  }
  while (current2 != null) {
    if (map.has(current2)) {
      found = true;
      break;
    } else {
      map.set(current2, true);
      current2 = current2.next;
    }
  }
  if (found) {
    return current2.element;
  } else {
    return false;
  }
}

let ll1 = new LinkedList();
ll1.addFront(1);
ll1.addFront(2);
ll1.addFront(3);
ll1.addFront(4);
ll1.addFront(5);
let ll2 = new LinkedList();
ll2.addFront(6);
ll2.addFront(7);
ll2.addFront(8);
let ll2head = ll2.head;
while (ll2head.next) {
  ll2head = ll2head.next;
}
ll2head.next = ll1.head;
ll1.printList();
ll2.printList();
console.log(findInterSection(ll1, ll2));
