"""
Exponential Search Implementation

Time Complexity:
- Best Case: O(1)
- Worst Case: O(log n)
- Average Case: O(log n)

Space Complexity: O(1) iterative or O(log n) recursive binary search.

Note: Input list must be sorted.
"""
from BinarySearch import binary_search

def exponential_search(arr, target):
    n = len(arr)
    if n == 0:
        return -1
    if arr[0] == target:
        return 0
        
    i = 1
    while i < n and arr[i] <= target:
        i = i * 2
        
    # Call binary search for the found range
    return binary_search_range(arr, i // 2, min(i, n - 1), target)

def binary_search_range(arr, low, high, target):
    while low <= high:
        mid = low + (high - low) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

# Example usage:
# if __name__ == "__main__":
#     data = [1, 2, 3, 4, 5, 8, 9, 10, 15, 20]
#     print(exponential_search(data, 15)) # Output: 8
