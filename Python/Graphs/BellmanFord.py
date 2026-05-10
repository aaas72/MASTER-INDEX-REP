"""
Bellman-Ford Algorithm Implementation

Time Complexity: O(V * E)
Space Complexity: O(V)
"""

import sys

def bellman_ford(edges, vertices_count, start_node):
    distances = [float('inf')] * vertices_count
    distances[start_node] = 0

    # Relax all edges V - 1 times
    for _ in range(vertices_count - 1):
        for u, v, w in edges:
            if distances[u] != float('inf') and distances[u] + w < distances[v]:
                distances[v] = distances[u] + w

    # Check for negative-weight cycles
    for u, v, w in edges:
        if distances[u] != float('inf') and distances[u] + w < distances[v]:
            return "Graph contains a negative weight cycle"

    return distances

# Example usage:
# if __name__ == "__main__":
#     # (source, destination, weight)
#     edges = [
#         (0, 1, -1), (0, 2, 4), (1, 2, 3), (1, 3, 2),
#         (1, 4, 2), (3, 2, 5), (3, 1, 1), (4, 3, -3)
#     ]
#     print(bellman_ford(edges, 5, 0)) # Output: [0, -1, 2, -2, 1]
