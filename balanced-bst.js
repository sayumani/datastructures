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

  isBinaryTreeBalanced() {
    if (this.root === null) {
      return true;
    }
    return this.maxDepth(this.root) - this.minDepth(this.root) <= 1;
  }

  maxDepth(node) {
    if (node === null) {
      return 0;
    }
    return 1 + Math.max(this.maxDepth(node.left), this.maxDepth(node.right));
  }

  minDepth(node) {
    if (node === null) {
      return 0;
    }
    return 1 + Math.min(this.minDepth(node.left), this.minDepth(node.right));
  }
}

var bTree = new BST();
console.log(bTree.isBinaryTreeBalanced());

// Inserting nodes to the BinarySearchTree
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
console.log(bTree.isBinaryTreeBalanced());
