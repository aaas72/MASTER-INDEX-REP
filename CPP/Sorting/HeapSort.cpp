/**
 * Heap Sort Implementation
 * 
 * Time Complexity:
 * - Best Case: O(n log n)
 * - Worst Case: O(n log n)
 * - Average Case: O(n log n)
 * 
 * Space Complexity: O(1) - in-place sorting.
 */

#include <iostream>
#include <vector>
#include <algorithm>

template <typename T>
void heapify(std::vector<T>& arr, int n, int i) {
    int largest = i;
    int l = 2 * i + 1;
    int r = 2 * i + 2;

    if (l < n && arr[l] > arr[largest])
        largest = l;

    if (r < n && arr[r] > arr[largest])
        largest = r;

    if (largest != i) {
        std::swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
    }
}

template <typename T>
void heapSort(std::vector<T>& arr) {
    int n = arr.size();

    // Build heap
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    // Extract elements from heap
    for (int i = n - 1; i > 0; i--) {
        std::swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}

/*
int main() {
    std::vector<int> data = {5, 3, 8, 4, 2};
    heapSort(data);
    for (int x : data) std::cout << x << " ";
    return 0;
}
*/
