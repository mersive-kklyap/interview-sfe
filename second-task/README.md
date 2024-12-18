# Server Availability Challenge for Full Stack Developer Interview

## Objective
The goal of this challenge is to evaluate your problem-solving and coding skills by implementing an efficient algorithm to determine if an API server is available at a given time. This exercise focuses on both the efficiency and correctness of your solution.

---

## Problem Description
You are given:

1. **A list of intervals** representing the available times of an API server:
   ```javascript
   const intervals = [
       { start: 9, end: 12 },
       { start: 14, end: 18 },
       { start: 20, end: 22 }
   ];
   ```
   Each interval is in 24-hour format, where `start` and `end` represent the opening and closing times, respectively.

2. **A query time**, e.g., `15`, for which you need to determine if the server is available.

---

## Requirements
- Implement an algorithm to determine if the server is available at the `queryTime`.
- The function should return `true` if the server is available and `false` otherwise.
- Ensure your implementation is efficient and can handle large input sizes.

---

## Input and Output
- **Input**:
    - A list of intervals in an array.
    - An integer `queryTime` representing the hour of the day (e.g., `15` for 3 PM).
- **Output**:
    - A boolean value (`true` or `false`) indicating availability.

---

## Tips
- Think about how to minimize the number of comparisons and operations needed to check availability.
- Test your function with multiple edge cases (e.g., overlapping intervals, `queryTime` at the boundaries).
---

Good luck, and happy coding! 🚀
