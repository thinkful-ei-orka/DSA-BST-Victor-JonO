const { BinarySearchTree } = require('./binary-tree')

// 4. What does this program do?
// Without running this code in your code editor, explain what the following program does. 
// Show with an example the result of executing this program. 
// What is the runtime of this algorithm?

function tree(t) {
     if (!t) {
          return 0;
     }
     return tree(t.left) + t.value + tree(t.right)
}

// It adds the node values of a tree.
//Runtime: O(n)

// 5. Height of a BST
// Write an algorithm to find the height of a binary search tree. 
// What is the time complexity of your algorithm?

function BSTHeight(t) {
     let leftHeight = 0;
     let rightHeight = 0;
     if (!t) {
          return 0;
     }
     else {
          leftHeight = BSTHeight(t.left);
          rightHeight = BSTHeight(t.right);
          if (leftHeight > rightHeight) {
               return leftHeight + 1;
          }
          else {
               return rightHeight + 1;
          }
     }
}
//Runtime: O(n)

// 6. Is it a BST?
// Write an algorithm to check whether an arbitrary binary tree is a binary search tree, 
// assuming the tree does not contain duplicates.

function isIt(t) {
     if (!t.key) {
          return false
     }
     if (t.left) {
          if (t.left.key > t.key) {
               return false;
          }
          else {
               return isIt(t.left)
          }
     }
     if (t.right) {
          console.log(t.right.right)
          if (t.right.key < t.key) {
               return false;
          }
          else {
               return isIt(t.right)
          }
     }
     if (t.right && t.left) {
          isIt(t.right);
          isIt(t.left);
     }
     if (!t.right && !t.left) {
          return true
     }
}

// 7. 3rd largest node
// Write an algorithm to find the 3rd largest node in a binary search tree.

function numLargest(t, state) {
     if (t.right) {
          numLargest(t.right, state);
          if (state.result) {
               return;
          }
     }
     if (!--state.num) {
          console.log('Found it')
          state.result = t.key;
          return;
     }
     if (t.left) {
          numLargest(t.left, state)
     }
}

function findThird(t) {
     if (t.key === null) {
          return null;
     }

     let state = { num: 3, result: null };
     numLargest(t, state);
     return state.result
}


// 8. Balanced BST
// Write an algorithm that checks if a BST is balanced 
// (i.e., a tree where no 2 leaves differ in distance from the root by more than 1).

function isItBalanced(t) {
     if (!t.left) {
          return !(t.right && (t.right.left || t.right.right));
     }
     if (!t.right) {
          return !(t.left && (t.left.left || t.left.right));
     }
     return isItBalanced(t.left) && isItBalanced(t.right)
}


// 9. Are they the same BSTs?
// You are given two arrays which represent two sequences of keys that are used to create two binary search trees. 
// Write a program that will tell whether the two BSTs will be identical or not without actually constructing the tree. 
// You may use another data structure such as an array or a linked list but don't construct the BST. 
// What is the time complexity of your algorithm? E.g., 3, 5, 4, 6, 1, 0, 2 and 3, 1, 5, 2, 4, 6, 0 are two sequences of 
// arrays but will create the exact same BSTs and your program should return true.

let arr1 = [3, 5, 4, 6, 1, 0, 2]
let arr2 = [3, 1, 5, 2, 4, 6, 0]

function areTheyTheSame(arr1, arr2) {

     if (arr1[0] !== arr2[0]) {
          return false;
     }

     if (arr1.length !== arr2.length) {
          return false;
     }

     if (arr1.length === 1 && arr2.length === 1) {
          return true
     }

     let root = arr1[0];
     let left = [];
     let right = [];
     let leftTwo = [];
     let rightTwo = [];

     for (let i = 0; i < arr1.length; i++) {
          if (arr1[i] < root) {
               left.push(arr1[i])
          } else if (arr1[i] > root) {
               right.push(arr1[i])
          }
          if (arr2[i] < root) {
               leftTwo.push(arr2[i])
          } else if (arr2[i] > root) {
               rightTwo.push(arr2[i])
          }
     }

     return areTheyTheSame(left, leftTwo) && areTheyTheSame(right, rightTwo)
}

function main() {
     const drillBST = new BinarySearchTree();

     drillBST.insert(3, 3);
     drillBST.insert(1, 1);
     drillBST.insert(4, 4);
     drillBST.insert(6, 6);
     drillBST.insert(9, 9);
     drillBST.insert(2, 2);
     drillBST.insert(5, 5);
     drillBST.insert(7, 7);


     const easyBST = new BinarySearchTree();

     easyBST.insert('E', 'E');
     easyBST.insert('A', 'A');
     easyBST.insert('S', 'S');
     easyBST.insert('Y', 'Y');
     easyBST.insert('Q', 'Q');
     easyBST.insert('U', 'U');
     easyBST.insert('E', 'E');
     easyBST.insert('S', 'S');
     easyBST.insert('T', 'T');
     easyBST.insert('I', 'I');
     easyBST.insert('O', 'O');
     easyBST.insert('N', 'N');

     const balancedBST = new BinarySearchTree();

     balancedBST.insert(5);
     balancedBST.insert(3);
     balancedBST.insert(2);
     balancedBST.insert(4);
     balancedBST.insert(7);
     balancedBST.insert(6);
     balancedBST.insert(8);

     const newBST = new BinarySearchTree();

     newBST.insert(6);
     newBST.insert(4);
     newBST.insert(1);
     newBST.insert(5);

     // console.log(4, findThird(newBST));

     // console.log(drillBST);
     // console.log(easyBST);
     // console.log(tree(drillBST))
     // console.log(BSTHeight(drillBST))
     // console.log(isIt(drillBST))
     // console.log(areTheyTheSame(arr1, arr2))
     // console.log(isItBalanced(drillBST))
     // console.log(isItBalanced(balancedBST))
     console.log(findThird(drillBST))
     // console.log(BSTHeight(balancedBST))
     console.log(findThird(balancedBST))
}

main();