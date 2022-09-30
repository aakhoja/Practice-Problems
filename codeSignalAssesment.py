'''

Let's say a triple (a, b, c) is a zigzag if either a < b > c or a > b < c.

Given an array of integers numbers, your task is to check all the triples of its consecutive elements for being a zigzag. More formally, 
your task is to construct an array of length numbers.length - 2, 
where the ith element of the output array equals 1 if the triple (numbers[i], numbers[i + 1], numbers[i + 2]) is a zigzag, and 0 otherwise.


'''

def solution(arr):
	res = []
	for i in range(len(arr) - 2):
		if (arr[i] < arr[i + 1] and arr[i + 1] > arr[i  + 2]) or (arr[i] > arr[i + 1] and arr[i + 1] < arr[i + 2]):
			res.append(1)
		else:
			res.append(0)
			
	return res


'''
Given integers a and b representing the dimensions of the rotated rectangle, and matrix (a matrix of integers), your task is to find the greatest sum of integers contained within an a x b rotated rectangle.

Note: The order of the dimensions is not important - consider all a x b and b x a rectangles.
'''

def solution(grid, a, b):
    if a + b - 1 > min(len(grid), len(grid[0])):
        return 0

    ret = 0
    for w, h in ((a, b), (b, a)):
        # for every possible leftmost axb/bxa rectangle...
        for start in range(min(len(grid), len(grid[0])) - (a + b - 1) + 1):
            i = start
            cur = 0
            deques = []
            j1 = j2 = w - 1
            # build the rectangle 
            while j1 <= j2:
                for k in range(j1, j2 + 1):
                    cur += grid[i][k]
                deques.append((j1, j2)) 
                j1 += (-1 if i - start < w - 1 else 1)
                j2 += (1 if i - start < h - 1 else -1)
                i += 1
            
            stop = False
            # slide it to the right until you can't anymore
            while True:
                ret = max(ret, cur)
                
                for ind, tup in enumerate(deques):
                    j1, j2 = tup
                    i = start + ind
                    if j2 == len(grid[0]) - 1:
                        stop = True
                        break
                    j2 += 1
                    cur += grid[i][j2] - grid[i][j1]
                    j1 += 1
                    deques[ind] = (j1, j2)

                if stop:
                    break
    
    return ret

