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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
    const map = new Map()
    const result = []

    const dfs = (node) => {
        if (!node) {
            return "null"
        }
        const series = [node.val, dfs(node.left), dfs(node.right)].join(",")
        if (map.get(series) == 1) {
            result.push(node)
        }
        map.set(series, (map.get(series) ?? 0) + 1)
        return series
    }
    dfs(root)
    return result
};