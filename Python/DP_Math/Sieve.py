"""
Sieve of Eratosthenes Implementation

Time Complexity: O(n log(log n))
Space Complexity: O(n)
"""

def sieve_of_eratosthenes(n):
    primes = [True] * (n + 1)
    primes[0] = primes[1] = False

    p = 2
    while p * p <= n:
        if primes[p]:
            for i in range(p * p, n + 1, p):
                primes[i] = False
        p += 1

    return [i for i, is_prime in enumerate(primes) if is_prime]

# Example usage:
# if __name__ == "__main__":
#     print(sieve_of_eratosthenes(30)) # Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
