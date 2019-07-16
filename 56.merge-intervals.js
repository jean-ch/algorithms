/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]);

    return intervals.reduce((acc, cur) => {
      if (acc.length == 0 || acc[acc.length - 1][1] < cur[0]) {
        return acc.concat([cur]);
      }

      let last = acc[acc.length - 1];
      return acc.slice(0, acc.length - 1).concat([[last[0], Math.max(last[1], cur[1])]]);
    }, [])
};

