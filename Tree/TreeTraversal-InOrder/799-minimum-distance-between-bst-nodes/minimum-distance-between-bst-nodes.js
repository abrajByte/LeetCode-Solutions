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
 * @return {number}
 */
var minDiffInBST = function(root) {
    let result = Infinity
    let prev = null

    const minDiff = (node) => {
        if(!node || result == 1 ){
            return
        }
        minDiff(node.left)
        if (prev !== null) {
            result = Math.min(result, Math.abs(node.val - prev));
        }
        prev = node.val;
        minDiff(node.right)
    }
    minDiff(root)
    return result
};