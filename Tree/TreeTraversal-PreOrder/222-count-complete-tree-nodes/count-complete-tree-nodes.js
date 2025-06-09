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

var leftHeight = function(root){
    let height = 0
    while(root){
        height++
        root = root.left
    }
    return height
}

var rightHeight = function(root){
    let height = 0
    while(root){
        height++
        root = root.right
    }
    return height
}
var countNodes = function(root) {
    if(!root){
        return 0
    }
    const lh = leftHeight(root)
    const rh = rightHeight(root)
    if(lh === rh){
        return (1<<lh)-1
    }
    return 1 + countNodes(root.left) + countNodes(root.right)
};