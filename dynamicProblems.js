/* Dynamic Problems */
/*Using Memo to make it faster */
/*
const fib = (n, memo = {}) => {
    if(n in memo) return memo[n];
    if(n <= 2)
        return 1;
    else{
        memo[n] = fib(n-1) + fib(n-2);
        return memo[n]
    }
}
*/

//console.log(fib(24));


/* 
Grid Traveler can only move down or right given M x N matrix. 
*/
/*
const gridTraveler = (m,n, memo = {}) => {
    const key = m + ',' + n;
    if(key in memo) return memo[key];
    if(m === 1 && n === 1) return 1;
    if(m === 0 || n === 0) return 0;
    memo[key] = gridTraveler(m-1,n,memo) + gridTraveler(m,n-1,memo);
    return memo[key];
};
*/
//console.log(gridTraveler(18,18));


/*
Return boolean indicating if the targetSum can be achieved by the given numbers
*/
/*
const canSum = (targetSum,numbers, memo = {}) => {

    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return true;
    if(targetSum < 0 ) return false;
    for(let num of numbers)
    {
        const remainder = targetSum - num;
        if(canSum(remainder,numbers,memo) === true)
        {
            memo[targetSum] = true;
            return memo[targetSum];
        }
    }
    memo[targetSum] = false;
    return memo[targetSum];
};*/

//console.log(canSum(8,[2,3,5]));

/*
Return an array containing any combinations of element that add up to target sum given numbers array.
*/

/*
const howSum = (targetSum, numbers, memo={}) => {
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
    if(targetSum in memo) return memo[targetSum];

    for(let num of numbers)
    {
        remainder = targetSum - num;
        const remainderArray = howSum(remainder,numbers,memo);
        if(remainderArray !== null)
        {
            memo[targetSum] =  [...remainderArray, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return memo[targetSum];
}
*/

//console.log(howSum(300,[7,14]));

/*
Return the array with the shortest combination of numbers that add up to targetSum
*/
/*
const bestSum = (targetSum,numbers, memo = {}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortestPath = null;

    for(let num of numbers)
    {
        const remainder = targetSum-num;
        const remainderArray = bestSum(remainder,numbers,memo);

        if(remainderArray !== null)
        {
            let combination =  [ ...remainderArray,num ];
            if(shortestPath === null || combination.length < shortestPath.length)
            {
                shortestPath = combination;
                memo[targetSum] = shortestPath;
            }
        }
    }
    return memo[targetSum];
}
*/
//console.log(bestSum(8,[1,4,5]));

/*
Return a boolean indicating whether "target" can be constructed by given wordBank array.
*/
/*
const canConstuct = (target,wordBank,memo = {}) => {
    if(target === '') return true;

    for(let word of wordBank)
    {
        if(target.indexOf(word) === 0)
        {
            const remain = target.slice(word.length);
            if(canConstuct(remain,wordBank,memo) === true)
            {
                memo[target] = true;
                return memo[target];
            }
        }
    }
    memo[target] = false;
    return memo[target]; 
}
*/
//console.log(canConstuct("jklmnopq", ['jk','nopq','def','lm']));

/*
Return the number of ways "target" can be achieved by given wordBank Array.
*/

/*
const countConstruct = (target,wordBank,memo = {}) => {
    if(target === '') return 1;

    let count = 0;

    for(let word of wordBank)
    {
        if(target.indexOf(word) === 0)
        {
            const remain = target.slice(word.length);
            const numOfWays = countConstruct(remain,wordBank,memo);
            count += numOfWays;

            //console.log(count);
        }
    }
    memo[target] = count;
    return count;
}
*/

//console.log(countConstruct('purple', ['purp' , 'le' , 'pur', 'ple']));








//Return boolean indicating if the targetSum can be achieved by the given numbers
const canSum = (targetSum,numbers) => {
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of numbers)
    {
        const remainder = targetSum - num;

        if(canSum(remainder,numbers) === true)
        {
            return true;
        }
    }
    return false;
}

//console.log(canSum(6,[3,4,2,1,5,6]));

//given money in arrays, return the max amount you can rob only condition is cannot rob adjacent

const robHouse = (nums) => { // 1,2,3,5,6 = max amt 1+3+6 = 10
    let prevMax = 0, curMax = 0;
    for (let n of nums) {
        let temp = curMax;
        curMax = Math.max(prevMax + n, curMax); // rob vs !rob
        prevMax = temp;
    }
    return Math.max(curMax, prevMax);
}

//console.log(robHouse([1,2,3,5,6]));

/*
The cost of painting each house with a certain color is represented by an n x 3 cost matrix costs.

For example, costs[0][0] is the cost of painting house 0 with the color red; costs[1][2] is the cost of painting house 1 with color green, and so on...

Return the minimum cost to paint all houses. */

var minCost = function(costs) {
    let a = 0, b = 0, c = 0;
    
    for(let [x,y,z] of costs)
    {
        [a,b,c] = [(x + Math.min(b,c)), (y + Math.min(a,c)), (z + Math.min(a,b))];
    }
    return Math.min(a,b,c);
};

//console.log(minCost([[17,2,17],[16,16,5],[14,3,19]]));


/*
You are painting a fence of n posts with k different colors. You must paint the posts following these rules:

    Every post must be painted exactly one color.
    There cannot be three or more consecutive posts with the same color.

Given the two integers n and k, return the number of ways you can paint the fence.
*/

var numWays = function(n, k) { // n = 3, k = 2
    if(n === 1) return k;

    let same = k * 1; // same = 2 * 1 = 2
    let diff = k * (k-1); // diff = 2 * (2 - 1) = 2
    let total = same + diff; // total = 2 + 2

    console.log("Value of same is : ", same, " Value of diff is : ", diff, " The value of total is : ", total);

    for(let i = 3; i <= n; i++)
    {
        same = diff;
        diff = total * (k-1);
        total = same + diff;
    }
    return total;
}

//console.log(numWays(3,2));



//Grid Traveler can only move down or right given M x N matrix. 
const gridTraveler = (m,n) => {
    if(m === 0 || n === 0) return 0
    if(m === 1 && n === 1) return 1
    else
        return gridTraveler(m-1,n) + gridTraveler(m,n-1); 
}
//console.log(gridTraveler(4,4));


/*
Return a boolean indicating whether "target" can be constructed by given wordBank array.
*/

const canConstuct = (target,wordBank) => {
    if(target.length === '') return true;

    for(let word of wordBank)
    {
        if(target.indexOf(word) === 0)
        {
            const remainder = target.slice(word.length);
            if(canConstuct(remainder,wordBank) === true)
            {
                return true;
            }
        }
    }
    return false;
};

//console.log(canConstuct("abcdefg", ['abc','ll[q','de','hijk','fg','pqrst']));
//console.log(canConstuct("jklmnopq", ['jk','nopq','def','lm']));



/*


Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let prev = 0;
    let max  = -Infinity;

    for(let i = 0; i < nums.length; i++)
    {
        const curr = nums[i];
        prev = Math.max(prev+curr,curr);
        max = Math.max(prev,max);
    }
    return max;
 };

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

/*
Given a string s, return true if the s can be palindrome after deleting at most one character from it.
*/

var validPalindrome = function(s) {
    let low = 0, high = s.length-1;
    while (low < high) {
        if (s[low] !== s[high]) {
            return isPalindrome(s, low+1, high) || isPalindrome(s, low, high-1);
        }
        low++, high--;
    }
    return true;
    // T.C: O(N)
    // S.C: O(1)
};

function isPalindrome(str, low, high) {
    while (low < high) {
        if (str[low] !== str[high]) return false;
        low++, high--;
    }
    return true;
}

/*

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

var isPalindrome = function(s) {

    let str = s.toLowerCase().replace(/[^a-z\d]/g, '');

    let start = 0, end = str.length -1;

    while(start < end)
    {
        if(str[start] !== str[end])
        {
            return false
        }
        start++;
        end--;
    }
    return true;
};

//console.log(validPalindrome("race a car"));

/*
Given a string s, return the longest palindromic substring in s.

A string is called a palindrome string if the reverse of that string is the same as the original string.
*/

//Input: s = "babad"
//Output: "bab"
//Explanation: "aba" is also a valid answer.

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let longDrome = '';
    
    const findLongestDrome = (s,i,j) => {
        while(i >= 0 && j < s.length && s[i] === s[j])
        {
                i--;
                j++;
        }
        
        return s.slice(i+1,j);
    }
    
    for(let i = 0; i < s.length; i++)
    {
        let palin1 = findLongestDrome(s,i,i);
        //console.log("This is palin 1 : " , palin1);
        let palin2 = findLongestDrome(s,i,i+1);
        //console.log("This is palin 2 : " , palin2);
        let longPalin = palin1.length > palin2.length ? palin1 : palin2;
        
        if(longPalin.length > longDrome.length)
            longDrome = longPalin;
    }

    return longDrome
};