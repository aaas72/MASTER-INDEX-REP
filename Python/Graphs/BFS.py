"""
Breadth-First Search (BFS) Implementation

Time Complexity: O(V + E)
Space Complexity: O(V)
"""

from collections import deque

def bfs(graph, start_node):
    n = len(graph)
    visited = [False] * n
    queue = deque([start_node])
    visited[start_node] = True
    result = []

    while queue:
        u = queue.popleft()
        result.append(u)

        for v in range(n):
            if graph[u][v] != 0 and not visited[v]:
                visited[v] = True
                queue.append(v)

    return result

# Example usage:
# if __name__ == "__main__":
#     graph = [
#         [0, 1, 1, 0],
#         [1, 0, 1, 0],
#         [1, 1, 0, 1],
#         [0, 0, 1, 0]
#     ]
#     print(bfs(graph, 0)) # Output: [0, 1, 2, 3]
