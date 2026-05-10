/**
 * Prim's Algorithm Implementation (Minimum Spanning Tree)
 * 
 * Time Complexity: O(V^2)
 * Space Complexity: O(V)
 */

#include <iostream>
#include <vector>
#include <climits>

int minKey(const std::vector<int>& key, const std::vector<bool>& mstSet) {
    int min = INT_MAX, min_index = -1;
    for (int v = 0; v < key.size(); v++) {
        if (!mstSet[v] && key[v] < min) {
            min = key[v];
            min_index = v;
        }
    }
    return min_index;
}

void primMST(const std::vector<std::vector<int>>& graph) {
    int V = graph.size();
    std::vector<int> parent(V);
    std::vector<int> key(V, INT_MAX);
    std::vector<bool> mstSet(V, false);

    key[0] = 0;
    parent[0] = -1;

    for (int count = 0; count < V - 1; count++) {
        int u = minKey(key, mstSet);
        mstSet[u] = true;

        for (int v = 0; v < V; v++) {
            if (graph[u][v] && !mstSet[v] && graph[u][v] < key[v]) {
                parent[v] = u;
                key[v] = graph[u][v];
            }
        }
    }

    for (int i = 1; i < V; i++)
        std::cout << parent[i] << " - " << i << " \t" << graph[i][parent[i]] << std::endl;
}

/*
int main() {
    std::vector<std::vector<int>> graph = {
        {0, 2, 0, 6, 0},
        {2, 0, 3, 8, 5},
        {0, 3, 0, 0, 7},
        {6, 8, 0, 0, 9},
        {0, 5, 7, 9, 0}
    };
    primMST(graph);
    return 0;
}
*/
