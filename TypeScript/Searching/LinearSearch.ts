/**
 * Linear Search Implementation
 * 
 * Time Complexity:
 * - Best Case: O(1) - element is at the first position.
 * - Worst Case: O(n)
 * - Average Case: O(n)
 * 
 * Space Complexity: O(1)
 */

export function linearSearch<T>(arr: T[], target: T): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1; // Target not found
}

// Example usage:
// const data = [5, 3, 8, 4, 2];
// console.log(linearSearch(data, 8)); // Output: 2
