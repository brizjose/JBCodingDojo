// binary search tree

// a data structure that holds data and when you visualize it, it looks like a tree, with branches and branches and subbranches

// all data points are called nodes
// main node is the root
// node relationships can be parent, child, sibling
// leaf nodes are at the end of branches and have no children
// any children of a node are parents of their own sub-tree

// a binary tree is a type of tree that has only two branches per node
// binary trees are ordered.  each subtree is less than or equal to the parent node, and each right subtree is greater than or equal to the parent node
// on average, search operations are able to skip about half of the tree, so each lookup, insertion or deletion takes time proportional to the log of the number items stored in the tree.
// this is much better than the linear time it takes to find items by key in an unsorted array
// still, it is slower than operations done in a hash table

// we'll create classes to construct a binary search tree

// node class represents each node in the tree
class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

// BST === binary search tree, and has 3 data properties
class BST {
    constructor() {
        this.root = null;
    }
    add(data) {
        // if there was no data, root would be null, so we populate with first data point
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            // we place the data using a recursive function to build the tree
            const searchTree = function(node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            // we hereby call the recursive function written above
            return searchTree(node);
        }
    }
    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }
    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }
    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }
    isPresent(data) {
        let current = this.root;
        while(current) {
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
    // remove is also a recursive function; we call the function at the end, you'll see
    remove(data) {
        const removeNode = function(node, data) {
            if (node == null) {
                return null;
            }
            if (data == node.data) {
                // node has no children
                if (node.left == null && node.right == null) {
                    return null;
                }
                // node has no left child
                if (node.left == null) {
                    return node.right;
                }
                // node has no right child
                if (node.right == null) {
                    return node.left;
                }
                // node has two children
                let tempNode = node.right;
                while (tempNode.left != null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }
}

const bst = new BST();

bst.add(4)
bst.add(2)
bst.add(6)
bst.add(1)
bst.add(3)
bst.add(5)
bst.add(7)
bst.remove(4)
console.log(bst.findMin());
console.log(bst.findMax());
bst.remove(7)
console.log(bst.findMax());
console.log(bst.isPresent(4));
