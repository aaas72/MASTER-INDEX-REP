/**
 * Sieve of Eratosthenes Implementation
 * 
 * Time Complexity: O(n log(log n))
 * Space Complexity: O(n)
 */

#include <iostream>
#include <vector>

void sieveOfEratosthenes(int n) {
    std::vector<bool> prime(n + 1, true);
    prime[0] = prime[1] = false;

    for (int p = 2; p * p <= n; p++) {
        if (prime[p]) {
            for (int i = p * p; i <= n; i += p)
                prime[i] = false;
        }
    }

    for (int p = 2; p <= n; p++) {
        if (prime[p])
            std::cout << p << " ";
    }
    std::cout << std::endl;
}

/*
int main() {
    sieveOfEratosthenes(30); // Output: 2 3 5 7 11 13 17 19 23 29
    return 0;
}
*/
