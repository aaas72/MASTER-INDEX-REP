"""
Binary Search Implementation

Time Complexity:
- Best Case: O(1)
- Worst Case: O(log n)
- Average Case: O(log n)

Space Complexity: O(1) - Iterative approach.

Note: Input list must be sorted.
"""

def binary_search(arr, target):
    low = 0
    high = len(arr) - 1

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
#     data = [1, 2, 3, 4, 5, 8, 9]
#     print(binary_search(data, 8)) # Output: 5
