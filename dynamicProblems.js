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

const howSum = (targetSum, numbers) => {
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    for(let num in numbers)
    {
        remainder = targetSum - num;
        const remainderArray = howSum(remainder,numbers);
        if(remainderArray !== null)
        {
            return [...remainderArray, num];
        }
    }
    return null;
}
