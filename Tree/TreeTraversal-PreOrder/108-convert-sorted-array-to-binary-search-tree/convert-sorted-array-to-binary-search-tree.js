/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

var buildBst = function(nums, l, r){
    if(l > r){
        return null
    }

    const middle = Math.floor((l+r)/2)
    const root = new TreeNode(nums[middle])
    root.left = buildBst(nums, l, middle-1)
    root.right = buildBst(nums, middle+1, r)
    return root
}

var sortedArrayToBST = function(nums) {
    return buildBst(nums, 0, nums.length-1)
};