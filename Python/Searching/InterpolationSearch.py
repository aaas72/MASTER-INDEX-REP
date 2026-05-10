"""
Interpolation Search Implementation

Time Complexity:
- Best Case: O(1)
- Worst Case: O(n)
- Average Case: O(log(log n))

Space Complexity: O(1)

Note: Input list must be sorted and uniformly distributed.
"""

def interpolation_search(arr, target):
    low = 0
    high = len(arr) - 1
    
    while low <= high and target >= arr[low] and target <= arr[high]:
        if low == high:
            if arr[low] == target:
                return low
            return -1
            
        # Probing formula
        pos = low + int(((float(high - low) / (arr[high] - arr[low])) * (target - arr[low])))
        
        if arr[pos] == target:
            return pos
        if arr[pos] < target:
            low = pos + 1
        else:
            high = pos - 1
            
    return -1

# Example usage:
# if __name__ == "__main__":
#     data = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47]
#     print(interpolation_search(data, 18)) # Output: 4
