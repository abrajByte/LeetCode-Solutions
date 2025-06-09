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
var maxAncestorDiff = function(root) {
    let maxDiff = -Infinity
    const dfs = (node, currMin, currMax) => {
        if(!node){
            return
        }
        maxDiff = Math.max(maxDiff, Math.abs(node.val - currMin), Math.abs(node.val - currMax))
        currMin = Math.min(currMin, node.val)
        currMax = Math.max(currMax, node.val)

        dfs(node.left, currMin, currMax)
        dfs(node.right, currMin, currMax)
    }
    dfs(root, root.val, root.val)
    return maxDiff
};