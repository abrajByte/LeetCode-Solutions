/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const construct = (preStart, preEnd, inStart, inEnd) => {
        if(preStart > preEnd || inStart > inEnd){
            return null
        }
        const root = new TreeNode(preorder[preStart])
        const inRoot = inorder.indexOf(root.val)
        const numsLeft = inRoot - inStart

        root.left = construct(preStart+1, preStart+numsLeft, inStart, inRoot-1)
        root.right = construct(preStart+numsLeft+1, preEnd, inRoot+1, inEnd)
        return root
    }
    return construct(0, preorder.length-1, 0, inorder.length-1)
};