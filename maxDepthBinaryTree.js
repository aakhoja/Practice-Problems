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
var maxDepth = function(root) {
    
    if(root === null)
        return 0;
    else
        return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
    
};


/* BFS

var maxDepth = function(root) {
    if (!root) return 0;
    const queue = [root];
    let depth = 0;
    while (queue.length !== 0) {
        depth++;
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            if (queue[i].left) queue.push(queue[i].left);
            if (queue[i].right) queue.push(queue[i].right);
        }
        queue.splice(0, len);
    }
    return depth;
};



/*
// DFS Recursive Solution
var maxDepth = function(root) {
    let maxDepth = 0;
    function dfs(root, depth) {
        if (!root) {
            maxDepth = Math.max(depth, maxDepth);
            return;
        }
        dfs(root.left, depth+1);
        dfs(root.right, depth+1);
    }
    dfs(root, 0);
    return maxDepth;
	// Time Complexity: O(n)
    // Space Complexity: O(n), in the worst case; in case of a skewed tree
};
*/