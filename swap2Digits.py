### You are given an array of non-negative integers numbers. You are allowed to choose any number from this array and swap any two digits in it. If after the swap operation the number contains leading zeros, they can be omitted and not considered (eg: 010 will be considered just 10).

### Your task is to check whether it is possible to apply the swap operation at most once, so that the elements of the resulting array are strictly increasing.


def solution(numbers):
    
    
    swaps = 0
    index = 0
    for i in range(len(numbers)-1):
        if numbers[i] >= numbers[i+1]:
            swaps+=1
            index=i
    if swaps > 1:
        return False
    elif not swaps:
        return True

    swappedI = swapToSmallest(numbers[index])
    if (index-1 < 0 or numbers[index-1] < swappedI) and numbers[index+1] > swappedI:
        return True
    swappedIPlus1 = swapToSmallest(numbers[index])
    if (index+1 > len(numbers) or numbers[index+1] < swappedIPlus1) and numbers[index-1] < swappedIPlus1:
        return True

    return False
    

def swapToSmallest(num) -> int:
    num = str(num)
    smallIndex = 0
    smallestRight = num[smallIndex]
    for i in range(1, len(num)):
        if num[i] <= smallestRight:
            smallestRight = num[i]
            smallIndex = i

    largeIndex = -1
    largeLeft = num[largeIndex]
    for i in range(len(num)-2, -1, -1):
        if num[i] >= largeLeft:
            largeLeft = num[i]
            largeIndex = i

    res = ""
    for i, v in enumerate(num):
        if i == largeIndex:
            res+=smallestRight
        elif i == smallIndex:
            res+=largeLeft
        else:
            res+=v


    return int(res)

