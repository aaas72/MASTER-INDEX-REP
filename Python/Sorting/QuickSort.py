"""
Quick Sort Implementation

Time Complexity:
- Best Case: O(n log n)
- Worst Case: O(n^2)
- Average Case: O(n log n)

Space Complexity: O(log n) for recursion stack.
"""

def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)

# Example usage:
# if __name__ == "__main__":
#     data = [5, 3, 8, 4, 2]
#     print(quick_sort(data))
