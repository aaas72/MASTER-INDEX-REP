/**
 * Depth-First Search (DFS) Implementation
 * 
 * Time Complexity: O(V + E)
 * Space Complexity: O(V) for the visited array and recursion stack.
 */

export function dfs(graph: number[][], startNode: number): number[] {
    const n = graph.length;
    const visited = new Array(n).fill(false);
    const result: number[] = [];

    const traverse = (u: number) => {
        visited[u] = true;
        result.push(u);

        for (let v = 0; v < n; v++) {
            if (graph[u][v] !== 0 && !visited[v]) {
                traverse(v);
            }
        }
    };

    traverse(startNode);
    return result;
}

// Example usage:
/*
const graph = [
    [0, 1, 1, 0],
    [1, 0, 1, 0],
    [1, 1, 0, 1],
    [0, 0, 1, 0]
];
console.log(dfs(graph, 0)); // Output: [0, 1, 2, 3]
*/
