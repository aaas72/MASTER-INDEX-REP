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

export function heapSort<T>(arr: T[]): T[] {
    const n = arr.length;
    const sortedArr = [...arr];

    // Build heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(sortedArr, n, i);
    }

    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        [sortedArr[0], sortedArr[i]] = [sortedArr[i], sortedArr[0]];

        // call max heapify on the reduced heap
        heapify(sortedArr, i, 0);
    }

    return sortedArr;
}

function heapify<T>(arr: T[], n: number, i: number): void {
    let largest = i; // Initialize largest as root
    const l = 2 * i + 1; // left = 2*i + 1
    const r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < n && arr[l] > arr[largest]) {
        largest = l;
    }

    // If right child is larger than largest so far
    if (r < n && arr[r] > arr[largest]) {
        largest = r;
    }

    // If largest is not root
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

// Example usage:
// const data = [5, 3, 8, 4, 2];
// console.log(heapSort(data));
