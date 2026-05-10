/**
 * Sieve of Eratosthenes Implementation
 * 
 * Time Complexity: O(n log(log n))
 * Space Complexity: O(n)
 */

export function sieveOfEratosthenes(n: number): number[] {
    const primes: boolean[] = new Array(n + 1).fill(true);
    primes[0] = primes[1] = false;

    for (let p = 2; p * p <= n; p++) {
        if (primes[p]) {
            for (let i = p * p; i <= n; i += p) {
                primes[i] = false;
            }
        }
    }

    const result: number[] = [];
    for (let i = 2; i <= n; i++) {
        if (primes[i]) {
            result.push(i);
        }
    }

    return result;
}

// Example usage:
// console.log(sieveOfEratosthenes(30)); // Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
