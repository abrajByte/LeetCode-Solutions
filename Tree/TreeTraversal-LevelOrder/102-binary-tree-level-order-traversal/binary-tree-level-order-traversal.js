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
var levelOrder = function(root) {
    if(!root){
        return []
    }
    const result = []
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
            result[result.length-1].push(q.shift().val)
        }
    }

    return result
};