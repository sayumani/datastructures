class Node {
  constructor(element) {
    this.element = element;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.inOrderArray = [];
  }

  insert(element) {
    let node = new Node(element);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(node, newNode) {
    if (newNode.element < node.element) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      this.inOrderArray.push(node.element);
      this.inOrder(node.right);
    }
  }
  findSecondLargest() {
    this.inOrder(this.root);
    return this.inOrderArray[this.inOrderArray.length - 2];
  }
  
}
let bTree= new BST();
bTree.insert(15);
bTree.insert(25);
bTree.insert(10);
bTree.insert(7);
bTree.insert(22);
bTree.insert(17);
bTree.insert(13);
bTree.insert(5);
bTree.insert(9);
bTree.insert(27);
bTree.insert(2);
console.log(bTree.findSecondLargest());
