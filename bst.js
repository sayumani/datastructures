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

  remove(element) {
    this.root = this.removeNode(this.root, element);
  }

  removeNode(node, element) {
    if (node === null) {
      return null;
    } else if (element < node.element) {
      node.left = this.removeNode(node.left, element);
      return node;
    } else if (element > node.element) {
      node.right = this.removeNode(node.right, element);
      return node;
    } else {
      // leaf node check , simply make the node null and return it.
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      // node with one child - right child
      else if (node.left === null) {
        node = node.right;
        return node;
      }
      // node with one child - left child
      else if (node.right === null) {
        node = node.left;
        return node;
      } else {
        let aux = this.findMinimumNode(node.right);
        node.element = aux.element;
        node.right = this.removeNode(node.right, aux.element);
        return node;
      }
    }
  }

  findMinimumNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinimumNode(node.left);
    }
  }

  searchNode(node, element) {
    if (node === null) {
      return null;
    } else if (element < node.element) {
      return this.searchNode(node.left, element);
    } else if (element > node.element) {
      return this.searchNode(node.right, element);
    } else {
      return node;
    }
  }

  getRootNode(){
      return this.root;
  }

  inOrder(node){
      if(node !==null){
          this.inOrder(node.left);
          console.log(node.element);
          this.inOrder(node.right);
      }
  }
  preOrder(node){
      if(node !==null){
          console.log(node.element);
          this.preOrder(node.left);
          this.preOrder(node.right);
      }
  }

  postOrder(node){
      if(node !== null){
          this.postOrder(node.left);
          this.postOrder(node.right);
          console.log(node.element);
      }
  }
}

var bTree = new BST(); 
  
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

var root = bTree.getRootNode(); 

bTree.inOrder(root); 
bTree.remove(5); 

var root = bTree.getRootNode(); 

bTree.inOrder(root); 
var root = bTree.getRootNode(); 
  
// prints 9 10 13 15 17 22 25 27 
bTree.inOrder(root); 
              
// Removing node with two children  
bTree.remove(15); 
  
var root = bTree.getRootNode(); 
console.log("inorder traversal"); 
  
// prints 9 10 13 17 22 25 27 
bTree.inOrder(root); 
              
console.log("postorder traversal"); 
bTree.postOrder(root); 
console.log("preorder traversal"); 
bTree.preOrder(root);