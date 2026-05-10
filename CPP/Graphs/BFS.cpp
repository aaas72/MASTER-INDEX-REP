/**
 * Breadth-First Search (BFS) Implementation
 * 
 * Time Complexity: O(V + E)
 * Space Complexity: O(V)
 */

#include <iostream>
#include <vector>
#include <queue>

std::vector<int> bfs(const std::vector<std::vector<int>>& graph, int startNode) {
    int n = graph.size();
    std::vector<bool> visited(n, false);
    std::queue<int> q;
    std::vector<int> result;

    visited[startNode] = true;
    q.push(startNode);

    while (!q.empty()) {
        int u = q.front();
        q.pop();
        result.push(u);

        for (int v = 0; v < n; v++) {
            if (graph[u][v] && !visited[v]) {
                visited[v] = true;
                q.push(v);
            }
        }
    }
    return result;
}

/*
int main() {
    std::vector<std::vector<int>> graph = {
        {0, 1, 1, 0},
        {1, 0, 1, 0},
        {1, 1, 0, 1},
        {0, 0, 1, 0}
    };
    std::vector<int> order = bfs(graph, 0);
    for (int node : order) std::cout << node << " ";
    return 0;
}
*/
