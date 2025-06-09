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
var diameterOfBinaryTree = function(root) {
    let diameter = 0
    const height = (node) => {
        if(!node){
            return 0
        }
        const lh = height(node.left)
        const rh = height(node.right)
        diameter = Math.max(diameter, lh+rh)
        return 1 + Math.max(lh, rh)
    }
    height(root)
    return diameter
};