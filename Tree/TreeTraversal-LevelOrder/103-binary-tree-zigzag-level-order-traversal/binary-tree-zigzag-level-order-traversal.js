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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root){
        return []
    }
    const result = []
    let isFromtLeftToRight = true
    const q = []
    q.push(root)

    while(q.length){
        const qSize = q.length
        result.push([])

        for(let i=0;i<qSize;i++){
            const peek = q[0]
            if(peek.left){
                q.push(peek.left)
            }
            if(peek.right){
                q.push(peek.right)
            }
            const item = q.shift().val
            if(isFromtLeftToRight){
                result[result.length-1].push(item)
            }else{
                result[result.length-1].unshift(item)
            }
        }
        isFromtLeftToRight = !isFromtLeftToRight
    }
    return result
};