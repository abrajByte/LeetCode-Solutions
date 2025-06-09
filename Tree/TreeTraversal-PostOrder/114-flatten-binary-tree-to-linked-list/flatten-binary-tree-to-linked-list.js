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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// recursive
// var flatten = function (root) {
//     let prev = null;

//     const dfs = (node) => {
//         if (!node) return;

//         dfs(node.right);
//         dfs(node.left);

//         node.right = prev;
//         node.left = null;
//         prev = node;
//     };

//     dfs(root);
// };

//itterative-1
// var flatten = function (root) {
//     if(!root){
//         return
//     }
//     const stack = []
//     stack.push(root)

//     while (stack.length) {
//         const curr = stack[stack.length - 1]
//         stack.pop()

//         if (curr.right) {
//             stack.push(curr.right)
//         }
//         if (curr.left) {
//             stack.push(curr.left)
//         }

//         if (stack.length) {
//             curr.right = stack[stack.length - 1]
//         }
//         curr.left = null
//     }
// };
// itterative-2 (Morris traversal)
var flatten = function (root) {
    let curr = root
    let prev = null
    while (curr) {
        if (curr.left) {
            prev = curr.left
            while (prev.right) {
                prev = prev.right
            }
            prev.right = curr.right
            curr.right = curr.left
            curr.left = null
        }
        curr = curr.right
    }
}