/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if(!root){
        return root
    }
    const q = []
    q.push(root)
    let currNode = null

    while(q.length){
        const qSize = q.length
        for(let i=0;i<qSize;i++){
            const peek = q[0]
            if(peek.left){
                q.push(peek.left)
            }
            if(peek.right){
                q.push(peek.right)
            }
            if(i == 0){
                currNode = q.shift()
            }else{
                currNode.next = q.shift()
                currNode = currNode.next
            }
        }
    }

    return root
};