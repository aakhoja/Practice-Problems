/*Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {

    let ans = new Array(nums.length)
     ans[0] = nums[0]
     for (let i = 1; i < nums.length; i++)
     {
             ans[i] = ans[i-1] + nums[i]
     }
     return ans
 };
 


/*
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1. */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function (nums) {
    let sum = nums.reduce((acc, num) => acc + num, 0)
    let currentSum = 0
    for (let i = 0; i < nums.length; i++) {
      currentSum += (nums[i - 1] || 0)
      sum -= nums[i]
      if (currentSum === sum) {
        return i
      }
    }
    return -1
  }



/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters.

No two characters may map to the same character, but a character may map to itself. */


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    
    const sMap = {};
    const tMap = {};
    
    for(let i=0; i<s.length; i++) {
    sMap[s[i]] = t[i];
    tMap[t[i]] = s[i];
    }

    for(let i=0; i<s.length; i++) {
    if(sMap[s[i]] !== t[i]){
        return false;
    }
    
    if(tMap[t[i]] !== s[i]){
        return false;
    }
}
return true;
    
};


/*

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters 
without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not). */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    
    if(s.length > t.length)
        return false;
    
     const t_length = t.length;
     let subsequence = 0;
     for (let i = 0; i < t_length; i++) {
        if (s[subsequence] === t[i]) {
          // ! if it is matching, increment subsequence
          subsequence++;
        }
      }
      return subsequence === s.length

};


/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    
    if(list1 == null)
        return list2;
    if(list2 == null)
        return list1;
    
    let head = null;
    let temp = head;
    
    if (list1.val < list2.val) {
        temp = head = new ListNode(list1.val);
        list1 = list1.next;
    } else {
        temp = head = new ListNode(list2.val);
        list2 = list2.next;
    }
    
    // Loop until any of the list becomes null
    while (list1 && list2) {
        if (list1.val < list2.val) {
            temp.next = new ListNode(list1.val);
            list1 = list1.next;
            temp = temp.next;
        } else {
            temp.next = new ListNode(list2.val);
            list2 = list2.next;
            temp = temp.next;
        }
    }
        
    while (list1) {
        temp.next = new ListNode(list1.val);
        list1 = list1.next;
        temp = temp.next;
    }
    // Add all the nodes in l2, if remaining
    while (list2) {
        temp.next = new ListNode(list2.val);
        list2 = list2.next;
        temp = temp.next;
    }
    return head; 
};


function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }




/*Given the head of a singly linked list, reverse the list, and return the reversed list.*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  
    var prev = null;
    var current = head;
    var next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
     head = prev;
     return head;
     
};

  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }


/*

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    
    let fast = head;
    let slow = head;
  
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  };
  
   function ListNode(val, next) {   
       this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
   }



/* 
Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)
   

*/

   var preorder = function(root) {
    const arr = [];
    const traverse = node => {
        if (node === null) {
            return;
        }
        // push the value before recursive calls for preorder
        arr.push(node.val);     
        for (const child of node.children) {
          traverse(child);  
        }    
    }
    traverse(root);
    return arr;
};


/*

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
*/


var levelOrder = function(root) {
    let result = [];
    currentLevelNodes = [];
    if(root) 
        currentLevelNodes.push(root);
    while(currentLevelNodes.length > 0) {
        current = [];
        let len = currentLevelNodes.length;
        for (let i = 0; i< len; i++) {
            let node = currentLevelNodes.shift();
            current.push(node.val);
            if(node.left) {
                currentLevelNodes.push(node.left);
            }
            if(node.right) {
                currentLevelNodes.push(node.right);
            }
        }
        result.push(current);
    }
    return result;
};


/*


Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    
    let left = 0, right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
            
        if (nums[mid] > target)
            right = --mid;
        else if (nums[mid] < target)
            left = ++mid;
        else return mid;
    }
    
    return -1;
};


/*

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. 
You should minimize the number of calls to the API.

*/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        
        let left = 1, right = n;
        
        while(left < right)
        {
            const mid = Math.floor((right + left)/2);
            if(isBadVersion(mid))
            {
                right = mid;
            }
            else
            {
                left = mid+1
            }
        }
        return right;
    };
};



/* Validate Binary Tree 

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

    The left subtree of a node contains only nodes with keys less than the node's key.
    The right subtree of a node contains only nodes with keys greater than the node's key.
    Both the left and right subtrees must also be binary search trees.
*/


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
 * @return {boolean}
 */
 var isValidBST = function(root) {
    if(!root) 
        return true
    return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
    
    function dfs(root, min, max){
        if(!root) 
            return true
        if(root.val <= min || root.val >= max)
            return false
        return dfs(root.left, min, root.val) && dfs(root.right, root.val, max)
    }
};
