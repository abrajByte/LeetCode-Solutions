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
var maxPathSum = function(root) {
    let max = root.val
    const dfs = (node) => {
        if(!node){
            return 0
        }
        const leftSum = Math.max(0, dfs(node.left))
        const rightSum = Math.max(0, dfs(node.right))
        max = Math.max(max, leftSum + rightSum + node.val)
        return node.val + Math.max(leftSum, rightSum)
    }
    dfs(root)
    return max
};