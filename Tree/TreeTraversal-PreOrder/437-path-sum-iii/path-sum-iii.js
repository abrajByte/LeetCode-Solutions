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
 * @param {number} targetSum
 * @return {number}
 */
 // O(n^2) solution
// var pathSum = function (root, targetSum) {
//     if (!root) {
//         return 0
//     }
//     let totalWays = 0

//     const dfs = (node, currSum) => {
//         if (!node) {
//             return
//         }
//         currSum += node.val
//         if (currSum === targetSum) {
//             totalWays++
//         }
//         dfs(node.left, currSum)
//         dfs(node.right, currSum)
//     }

//     const traverse = (node) => {
//         if (!node) {
//             return
//         }
//         dfs(node, 0)
//         traverse(node.left)
//         traverse(node.right)
//     }
//     traverse(root)
//     return totalWays
// };

var pathSum = function (root, targetSum) {
    if(!root){
        return 0
    }
    const prefixSumCout = {0:1}
    let totalWays = 0

    const dfs = (node, currSum) => {
        if(!node){
            return
        }
        currSum += node.val
        const needSum = currSum - targetSum
        if(prefixSumCout[needSum]){
            totalWays += prefixSumCout[needSum]
        }
        prefixSumCout[currSum] = (prefixSumCout[currSum] || 0) + 1
        dfs(node.left, currSum)
        dfs(node.right, currSum)
        prefixSumCout[currSum]--
    }
    dfs(root, 0)
    return totalWays
}