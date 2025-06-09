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
var distributeCoins = function(root) {
    let steps = 0
    const dfs = (node) => {
        if(!node){
            return 0
        }
        const leftRequired = dfs(node.left)
        const rightRequired = dfs(node.right)
        steps += Math.abs(leftRequired) + Math.abs(rightRequired)
        return (node.val-1) + leftRequired + rightRequired
    }
    dfs(root)
    return steps
};