/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let result = null
    let cnt = 0
    const inorder = (node) => {
        if(!node || result != null){
            return
        }
        inorder(node.left)
        cnt++
        if(cnt == k){
            result = node.val
            return
        }
        inorder(node.right)
    }
    inorder(root)
    return result
};