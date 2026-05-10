/**
 * Binary Search Implementation
 * 
 * Time Complexity:
 * - Best Case: O(1) - element is at the middle.
 * - Worst Case: O(log n)
 * - Average Case: O(log n)
 * 
 * Space Complexity: O(1) for iterative approach.
 * 
 * Note: Input array must be sorted.
 */

export function binarySearch<T>(arr: T[], target: T): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Target not found
}

// Example usage:
// const data = [1, 2, 3, 4, 5, 8, 9];
// console.log(binarySearch(data, 8)); // Output: 5
