### A sawtooth sequence is a sequence of numbers that alternate between increasing and decreasing. 
# In other words, each element is either strictly greater than its neighbouring elements or strictly less than its neighbouring elements.


### 

#For arr = [9, 8, 7, 6, 5], the output should be solution(arr) = 4.
#
#Since all the elements are arranged in decreasing order, it won't be possible to form any sawtooth subarrays of length 3 or more. There are 4 possible subarrays containing two elements, so the answer is 4.





def solution(arr):
    # holds the count of sawtooths at each index of our input array,
    # for sawtooth lengths up to that index
    saws = [0 for x in range(0, len(arr))]
    # the resulting total sawtooth counts
    totalSawCounts = 0
    previousCount = 0

    for currIdx in range(1, len(arr)):
        currCount = 0
        before = currIdx -1
        if (arr[currIdx] > arr[before]):
            goingUp = True
        elif (arr[currIdx] < arr[before]):
            goingUp = False
        else:
            break

        # if we made it here, we have at least one sawtooth
        currCount =  1

        # see if there was a previous solution (the DP part)
        # and if it continues our current sawtooth
        if before >= 1:
            if goingUp:
                if arr[before-1] > arr[before]:
                    currCount = previousCount + currCount
            else:
                if arr[before-1] < arr[before]:
                    currCount = previousCount + currCount
        previousCount = currCount
        totalSawCounts = totalSawCounts + currCount

    return totalSawCounts