/**
 * Determines if the server is available at the given time.
 * @param {Array<{start: number, end: number}>} intervals - Array of time intervals.
 * @param {number} queryTime - Time to check (0-24).
 * @returns {boolean} - True if available, false otherwise.
 */
function isServerAvailable(intervals, queryTime) {
    // Your code here :)
    return true;
}

// Example usage
const intervals = [
    { start: 9, end: 12 },
    { start: 14, end: 18 },
    { start: 20, end: 22 }
];

console.log(isServerAvailable(intervals, 2));
