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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    const toDeleteSet = new Set(to_delete)
    const result = []

    const dfs = (node, isRoot) => {
        if(!node){
            return null
        }
        const shouldDelete = toDeleteSet.has(node.val)
        if(isRoot && !shouldDelete){
            result.push(node)
        }
        node.left = dfs(node.left, shouldDelete)
        node.right = dfs(node.right, shouldDelete)
        return shouldDelete ? null : node
    }
    dfs(root, true)
    return result
};