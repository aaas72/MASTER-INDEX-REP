/**
 * Merge Sort Implementation
 * 
 * Time Complexity:
 * - Best Case: O(n log n)
 * - Worst Case: O(n log n)
 * - Average Case: O(n log n)
 * 
 * Space Complexity: O(n) for temporary arrays.
 */

export function mergeSort<T>(arr: T[]): T[] {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge<T>(left: T[], right: T[]): T[] {
    const result: T[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
// const data = [5, 3, 8, 4, 2];
// console.log(mergeSort(data));
