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
 * @return {number[]}
 */
// var rightSideView = function(root) {
//     const result = []
//     if(!root){
//         return result
//     }
//     const q = []
//     q.push(root)
//     while(q.length){
//         const qSize = q.length
//         result.push(q[q.length-1].val)
//         for(let i=0;i<qSize;i++){
//             const peek = q[0]
//             if(peek.left){
//                 q.push(peek.left)
//             }
//             if(peek.right){
//                 q.push(peek.right)
//             }
//             q.shift()
//         }
//     }
//     return result
// };
// traverse root right left (preorder in reverse)
const Rrl = (root, level, ds)=>{
    if(!root){
        return []
    }
    if(level == ds.length){
        ds.push(root.val)
    }
    Rrl(root.right, level+1, ds)
    Rrl(root.left, level+1, ds)
    return ds
}

var rightSideView = function(root){
    const ds = []
    return Rrl(root,0, [])
}