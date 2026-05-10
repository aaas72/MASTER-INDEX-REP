/**
 * Exponential Search Implementation
 * 
 * Time Complexity:
 * - Best Case: O(1)
 * - Worst Case: O(log n)
 * - Average Case: O(log n)
 * 
 * Space Complexity: O(log n) if binary search is recursive, O(1) if iterative.
 * 
 * Note: Input array must be sorted.
 */

import { binarySearch } from './BinarySearch';

export function exponentialSearch(arr: number[], target: number): number {
    const n = arr.length;
    if (n === 0) return -1;
    if (arr[0] === target) return 0;

    let i = 1;
    while (i < n && arr[i] <= target) {
        i = i * 2;
    }

    // Call binary search for the found range
    const searchRange = arr.slice(Math.floor(i / 2), Math.min(i, n));
    const result = binarySearch(searchRange, target);
    
    return result === -1 ? -1 : result + Math.floor(i / 2);
}

// Example usage:
// const data = [1, 2, 3, 4, 5, 8, 9, 10, 15, 20];
// console.log(exponentialSearch(data, 15)); // Output: 8
