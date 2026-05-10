/**
 * Merge Sort Implementation
 * 
 * Time Complexity:
 * - Best Case: O(n log n)
 * - Worst Case: O(n log n)
 * - Average Case: O(n log n)
 * 
 * Space Complexity: O(n) for temporary vectors.
 */

#include <iostream>
#include <vector>

template <typename T>
void merge(std::vector<T>& arr, int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;

    std::vector<T> L(n1), R(n2);

    for (int i = 0; i < n1; i++) L[i] = arr[l + i];
    for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

template <typename T>
void mergeSort(std::vector<T>& arr, int l, int r) {
    if (l >= r) return;
    int m = l + (r - l) / 2;
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
}

// Wrapper function
template <typename T>
void mergeSort(std::vector<T>& arr) {
    if (!arr.empty()) {
        mergeSort(arr, 0, arr.size() - 1);
    }
}

/*
int main() {
    std::vector<int> data = {5, 3, 8, 4, 2};
    mergeSort(data);
    for (int x : data) std::cout << x << " ";
    return 0;
}
*/
