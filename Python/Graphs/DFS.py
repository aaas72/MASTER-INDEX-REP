"""
Depth-First Search (DFS) Implementation

Time Complexity: O(V + E)
Space Complexity: O(V)
"""

def dfs(graph, start_node):
    n = len(graph)
    visited = [False] * n
    result = []

    def traverse(u):
        visited[u] = True
        result.append(u)

        for v in range(n):
            if graph[u][v] != 0 and not visited[v]:
                traverse(v)

    traverse(start_node)
    return result

# Example usage:
# if __name__ == "__main__":
#     graph = [
#         [0, 1, 1, 0],
#         [1, 0, 1, 0],
#         [1, 1, 0, 1],
#         [0, 0, 1, 0]
#     ]
#     print(dfs(graph, 0)) # Output: [0, 1, 2, 3]
