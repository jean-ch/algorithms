/**
* DP   
* s[i] === s[j]: dp[i][j] = dp[i + 1][j - 1] + 2;   
* s[i] !== s[j]: dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);  
* 因为遍历到dp[i][j]时dp[i + 1][j]和dp[i][j - 1]都要准备好，所有i是从后往前遍历，j是从前往后遍历。因此i从len - 1到0, j从i + 1到len - 1    
* js声明二维数组： ```Array(s.length).fill(null).map(() => Array(s.length).fill(0));```    
*/

/**
 * @param s: the maximum length of s is 1000
 * @return: the longest palindromic subsequence's length
 */
const longestPalindromeSubseq = function (s) {
    if (s === null || s.length === 0) {
        return 0;
    }
    
    let dp = Array(s.length).fill(null).map(() => Array(s.length).fill(0));
    for (let i = s.length - 1; i >= 0; i--) {
        dp[i][i] = 1;
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }
    
    return dp[0][s.length - 1];
}
