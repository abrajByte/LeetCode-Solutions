/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

const findMiddle = (head) => {
    let prev = null
    let slow = head
    let fast = head

    while (fast && fast.next) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }

    if (prev) prev.next = null
    return slow
}

var sortedListToBST = function(head) {
    if (!head) return null
    if (!head.next) return new TreeNode(head.val)

    let middle = findMiddle(head)
    let root = new TreeNode(middle.val)
    root.left = sortedListToBST(head)
    root.right = sortedListToBST(middle.next)

    return root;
};