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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const allPath = (root, arr, res)=>{
    if(!root){
        return
    }
    arr.push(root.val)
    allPath(root.left, arr, res)
    allPath(root.right, arr, res)
    if(!root.left && !root.right){
        res.push(arr.join("->"))
    }
    arr.pop()
    return res
    }
    return allPath(root, [], [])
};