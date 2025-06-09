/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const construct = (inStart, inEnd, postStart, postEnd) => {
        if(inStart > inEnd || postStart > postEnd){
            return null
        }
        const root = new TreeNode(postorder[postEnd])
        const inRoot = inorder.indexOf(root.val)
        const numsLeft = inRoot - inStart

        root.left = construct(inStart, inRoot-1, postStart, postStart+numsLeft-1)
        root.right = construct(inRoot+1, inEnd, postStart+numsLeft, postEnd-1)
        return root
    }
    return construct(0, inorder.length-1, 0, postorder.length-1)
};