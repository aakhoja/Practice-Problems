/*You are given an array of integers a, where each element a[i] represents the length of a ribbon.

Your goal is to obtain k ribbons of the same length, by cutting the ribbons into as many pieces as you want.

Your task is to calculate the maximum integer length L for which it is possible to obtain at least k ribbons of length L by cutting the given ones.

*/

var solution = function (ribbons, k) {
            
    // checks if we are able to get enough ribbons of size k
    const isValidDiv = (val) => {
        let res = 0
        for (let i = 0; i < ribbons.length; i++) {
            res += Math.floor(ribbons[i]/val)
        }
        if (res >= k) return true
        return false
    }
    
    // finds the sum of all ribbon sizes added together
    const sum = ribbons.reduce((acc, cur) => {
        return acc+cur
    }, 0) 
    
    // a valid answer must be = or less then the max possible size
    const maxValue = Math.floor(sum / k)
    
    // if the only valid size is 0, we cant cut ribbions to length 0 so return our error state
    if (maxValue === 0) return 0
    
    let left = 0
    let right = maxValue

    // binary search the lower bound of all possible ribbon sizes 
    while (left < right) {
        const pV = Math.floor((left+right+1)/2)
        if (isValidDiv(pV)) {
            left = pV
        } else {
            right = pV - 1
        }
    }
    
    return left
};





