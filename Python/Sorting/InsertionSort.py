"""
Insertion Sort Implementation

Time Complexity:
- Best Case: O(n)
- Worst Case: O(n^2)
- Average Case: O(n^2)

Space Complexity: O(1) - in-place sorting.
"""

def insertion_sort(arr):
    res = list(arr)
    for i in range(1, len(res)):
        key = res[i]
        j = i - 1
        while j >= 0 and key < res[j]:
            res[j + 1] = res[j]
            j -= 1
        res[j + 1] = key
    return res

# Example usage:
# if __name__ == "__main__":
#     data = [5, 3, 8, 4, 2]
#     print(insertion_sort(data))
