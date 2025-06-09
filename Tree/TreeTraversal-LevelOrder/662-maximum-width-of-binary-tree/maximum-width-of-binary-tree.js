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
var widthOfBinaryTree = function (root) {
    if (!root) {
        return 0
    }
    let maxWidth = 0
    const q = [[root, 0]]

    while (q.length) {
        const qSize = q.length
        const mmin = q[0][1]
        const mmax = q[q.length - 1][1]
        maxWidth = Math.max(maxWidth, mmax - mmin + 1)

        for (let i = 0; i < qSize; i++) {
            const [node, idx] = q.shift();
            const curr_id = idx - mmin;
            if (node.left) q.push([node.left, 2 * curr_id + 1]);
            if (node.right) q.push([node.right, 2 * curr_id + 2]);
        }
    }
    return maxWidth
};