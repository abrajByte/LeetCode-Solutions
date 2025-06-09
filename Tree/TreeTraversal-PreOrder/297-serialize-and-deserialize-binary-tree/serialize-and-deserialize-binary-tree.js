/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) return "";

    const result = [];
    const q = [root];

    while (q.length) {
        const node = q.shift();

        if (node) {
            result.push(node.val);
            q.push(node.left);
            q.push(node.right);
        } else {
            result.push("null");
        }
    }

    while (result[result.length - 1] === "null") {
        result.pop();
    }

    return result.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data) return null;

    const nodes = data.split(",");
    const root = new TreeNode(parseInt(nodes[0]));
    const q = [root];
    let i = 1;

    while (q.length && i < nodes.length) {
        const peek = q.shift();

        const leftVal = nodes[i++];
        if (leftVal !== "null") {
            peek.left = new TreeNode(parseInt(leftVal));
            q.push(peek.left);
        }

        if (i < nodes.length) {
            const rightVal = nodes[i++];
            if (rightVal !== "null") {
                peek.right = new TreeNode(parseInt(rightVal));
                q.push(peek.right);
            }
        }
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */