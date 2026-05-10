"""
Dijkstra's Algorithm Implementation

Time Complexity: O(V^2) with adjacency matrix.
Space Complexity: O(V)
"""

import sys

def dijkstra(graph, start_node):
    n = len(graph)
    distances = [sys.maxsize] * n
    visited = [False] * n
    distances[start_node] = 0

    for _ in range(n):
        u = min_distance(distances, visited)
        visited[u] = True

        for v in range(n):
            if not visited[v] and graph[u][v] > 0 and \
               distances[u] != sys.maxsize and \
               distances[u] + graph[u][v] < distances[v]:
                distances[v] = distances[u] + graph[u][v]

    return distances

def min_distance(distances, visited):
    min_val = sys.maxsize
    min_index = -1

    for v in range(len(distances)):
        if distances[v] < min_val and not visited[v]:
            min_val = distances[v]
            min_index = v

    return min_index

# Example usage:
# if __name__ == "__main__":
#     graph = [
#         [0, 4, 0, 0, 0],
#         [4, 0, 8, 0, 0],
#         [0, 8, 0, 7, 0],
#         [0, 0, 7, 0, 9],
#         [0, 0, 0, 9, 0]
#     ]
#     print(dijkstra(graph, 0))
