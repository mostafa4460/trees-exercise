/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    let count = 0;
    if (!this.root) return count;

    let queueToVisit = [this.root];
    while (queueToVisit.length) {
      let currNode = queueToVisit.shift();
      if (!currNode.val) return count;
      else if (!(currNode.left || currNode.right)) return count + 1;
      queueToVisit.push(currNode.left);
      queueToVisit.push(currNode.right);
      count += 1;
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;
    let count = 1;

    let queueToVisit = [this.root];
    while (queueToVisit.length) {
      let currNode = queueToVisit.shift();
      if (currNode.left || currNode.right) {
        count += 1;
        if (currNode.left) queueToVisit.push(currNode.left);
        if (currNode.right) queueToVisit.push(currNode.right);
      }
    }
    return count;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) return 0;
    let sum = this.root.val;

    let rightSide = this.root.right,
      rightSideRightSum = 0;
    while (rightSide) {
      rightSideRightSum += rightSide.val;
      rightSide = rightSide.right;
    }

    rightSide = this.root.right;
    let rightSideLeftSum = 0;
    while (rightSide) {
      rightSideLeftSum += rightSide.val;
      rightSide = rightSide.left;
    }

    if (rightSideRightSum >= rightSideLeftSum) sum += rightSideRightSum;
    else sum += rightSideLeftSum;

    let leftSide = this.root.left,
      leftSideRightSum = 0;
    while (leftSide) {
      leftSideRightSum += leftSide.val;
      leftSide = leftSide.right;
    }

    leftSide = this.root.left;
    let leftSideLeftSum = 0;
    while (leftSide) {
      leftSideLeftSum += leftSide.val;
      leftSide = leftSide.left;
    }

    if (leftSideRightSum >= leftSideLeftSum) sum += leftSideRightSum;
    else sum += leftSideLeftSum;

    return sum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;
    let foundVals = [],
      stackToVisit = [this.root];

    while (stackToVisit.length) {
      let currNode = stackToVisit.pop();
      if (currNode.val > lowerBound) foundVals.push(currNode.val);
      if (currNode.right) stackToVisit.push(currNode.right);
      if (currNode.left) stackToVisit.push(currNode.left);
    }
    if (!foundVals.length) return null;
    else return Math.min(...foundVals);
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
