/**
 * Prim's Algorithm Implementation (Minimum Spanning Tree)
 * 
 * Time Complexity: O(V^2) with adjacency matrix.
 * Space Complexity: O(V)
 */

export function primMST(graph: number[][]): number[] {
    const n = graph.length;
    const parent = new Array(n).fill(-1);
    const key = new Array(n).fill(Infinity);
    const mstSet = new Array(n).fill(false);

    key[0] = 0;

    for (let count = 0; count < n - 1; count++) {
        const u = minKey(key, mstSet);
        mstSet[u] = true;

        for (let v = 0; v < n; v++) {
            if (graph[u][v] !== 0 && !mstSet[v] && graph[u][v] < key[v]) {
                parent[v] = u;
                key[v] = graph[u][v];
            }
        }
    }

    return parent;
}

function minKey(key: number[], mstSet: boolean[]): number {
    let min = Infinity;
    let minIndex = -1;

    for (let v = 0; v < key.length; v++) {
        if (!mstSet[v] && key[v] < min) {
            min = key[v];
            minIndex = v;
        }
    }

    return minIndex;
}

// Example usage:
/*
const graph = [
    [0, 2, 0, 6, 0],
    [2, 0, 3, 8, 5],
    [0, 3, 0, 0, 7],
    [6, 8, 0, 0, 9],
    [0, 5, 7, 9, 0]
];
console.log(primMST(graph));
*/
