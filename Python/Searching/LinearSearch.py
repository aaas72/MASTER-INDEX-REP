"""
Linear Search Implementation

Time Complexity:
- Best Case: O(1)
- Worst Case: O(n)
- Average Case: O(n)

Space Complexity: O(1)
"""

def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

# Example usage:
# if __name__ == "__main__":
#     data = [5, 3, 8, 4, 2]
#     print(linear_search(data, 8)) # Output: 2
