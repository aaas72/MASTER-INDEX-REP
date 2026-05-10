/**
 * Breadth-First Search (BFS) Implementation
 * 
 * Time Complexity: O(V + E) where V is the number of vertices and E is the number of edges.
 * Space Complexity: O(V) for the visited array and queue.
 */

export function bfs(graph: number[][], startNode: number): number[] {
    const n = graph.length;
    const visited = new Array(n).fill(false);
    const queue: number[] = [];
    const result: number[] = [];

    visited[startNode] = true;
    queue.push(startNode);

    while (queue.length > 0) {
        const u = queue.shift()!;
        result.push(u);

        for (let v = 0; v < n; v++) {
            if (graph[u][v] !== 0 && !visited[v]) {
                visited[v] = true;
                queue.push(v);
            }
        }
    }

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
console.log(bfs(graph, 0)); // Output: [0, 1, 2, 3]
*/
