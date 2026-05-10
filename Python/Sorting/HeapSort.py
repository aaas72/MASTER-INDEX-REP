"""
Heap Sort Implementation

Time Complexity:
- Best Case: O(n log n)
- Worst Case: O(n log n)
- Average Case: O(n log n)

Space Complexity: O(1) - in-place sorting.
"""

def heap_sort(arr):
    n = len(arr)
    res = list(arr)

    # Build a maxheap.
    for i in range(n // 2 - 1, -1, -1):
        heapify(res, n, i)

    # One by one extract elements
    for i in range(n - 1, 0, -1):
        res[i], res[0] = res[0], res[i]  # swap
        heapify(res, i, 0)
    
    return res

def heapify(arr, n, i):
    largest = i
    l = 2 * i + 1
    r = 2 * i + 2

    if l < n and arr[i] < arr[l]:
        largest = l

    if r < n and arr[largest] < arr[r]:
        largest = r

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

# Example usage:
# if __name__ == "__main__":
#     data = [5, 3, 8, 4, 2]
#     print(heap_sort(data))
