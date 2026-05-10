/**
 * Quick Sort Implementation
 * 
 * Time Complexity:
 * - Best Case: O(n log n)
 * - Worst Case: O(n^2)
 * - Average Case: O(n log n)
 * 
 * Space Complexity: O(log n) for recursion stack.
 */

#include <iostream>
#include <vector>
#include <algorithm>

template <typename T>
int partition(std::vector<T>& arr, int low, int high) {
    T pivot = arr[high];
    int i = (low - 1);

    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            std::swap(arr[i], arr[j]);
        }
    }
    std::swap(arr[i + 1], arr[high]);
    return (i + 1);
}

template <typename T>
void quickSort(std::vector<T>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

// Wrapper function for easier usage
template <typename T>
void quickSort(std::vector<T>& arr) {
    if (!arr.empty()) {
        quickSort(arr, 0, arr.size() - 1);
    }
}

/*
int main() {
    std::vector<int> data = {5, 3, 8, 4, 2};
    quickSort(data);
    for (int x : data) std::cout << x << " ";
    return 0;
}
*/
