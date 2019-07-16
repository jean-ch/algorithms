/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0;
    let min = 0;
    let max = Number.NEGATIVE_INFINITY;
    nums.forEach(num => {
      sum += num;
      max = Math.max(max, sum - min);
      min = Math.min(min, sum);
    });

    return max;
};

