"""
Bubble Sort Implementation

Time Complexity:
- Best Case: O(n)
- Worst Case: O(n^2)
- Average Case: O(n^2)

Space Complexity: O(1) - in-place sorting.
"""

def bubble_sort(arr):
    n = len(arr)
    # Create a copy to avoid mutating the original list if desired, 
    # but standard implementation is in-place.
    res = list(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if res[j] > res[j + 1]:
                res[j], res[j + 1] = res[j + 1], res[j]
                swapped = True
        if not swapped:
            break
    return res

# Example usage:
# if __name__ == "__main__":
#     data = [5, 3, 8, 4, 2]
#     print(bubble_sort(data))
