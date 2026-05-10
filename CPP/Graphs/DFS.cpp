/**
 * Depth-First Search (DFS) Implementation
 * 
 * Time Complexity: O(V + E)
 * Space Complexity: O(V)
 */

#include <iostream>
#include <vector>

void dfsUtil(int u, const std::vector<std::vector<int>>& graph, std::vector<bool>& visited, std::vector<int>& result) {
    visited[u] = true;
    result.push_back(u);

    for (int v = 0; v < graph.size(); v++) {
        if (graph[u][v] && !visited[v]) {
            dfsUtil(v, graph, visited, result);
        }
    }
}

std::vector<int> dfs(const std::vector<std::vector<int>>& graph, int startNode) {
    int n = graph.size();
    std::vector<bool> visited(n, false);
    std::vector<int> result;
    dfsUtil(startNode, graph, visited, result);
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
    std::vector<int> order = dfs(graph, 0);
    for (int node : order) std::cout << node << " ";
    return 0;
}
*/
