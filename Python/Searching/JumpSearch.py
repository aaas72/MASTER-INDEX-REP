"""
Jump Search Implementation

Time Complexity:
- Best Case: O(1)
- Worst Case: O(√n)
- Average Case: O(√n)

Space Complexity: O(1)

Note: Input list must be sorted.
"""
import math

def jump_search(arr, target):
    n = len(arr)
    step = int(math.sqrt(n))
    prev = 0
    
    while arr[min(step, n) - 1] < target:
        prev = step
        step += int(math.sqrt(n))
        if prev >= n:
            return -1
            
    while arr[prev] < target:
        prev += 1
        if prev == min(step, n):
            return -1
            
    if arr[prev] == target:
        return prev
        
    return -1

# Example usage:
# if __name__ == "__main__":
#     data = [1, 2, 3, 4, 5, 8, 9, 10, 15, 20]
#     print(jump_search(data, 15)) # Output: 8
