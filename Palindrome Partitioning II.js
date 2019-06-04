/**
 * 1. 用dp求minCut，dp[i]表示前i个字符的minCut
 * - 状态方程： dp[i] = min(dp[j] + 1) if s(j, i) is palindrome
 * - i的取值范围是[1, len], j的取值范围是[0, len)
 * - 初始状态：因为dp[1]应该为0，所以初始状态dp[0] = -1
 * 2. 用dp求isPalindrome: dp[i][j]表示s[i, j]是否是palindrome
 * - 状态方程： dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j]
 * - 因为状态方程中遍历到dp[i][j]之前应该先求得dp[i + 1][j - 1]的状态，所以是由中心点展开的一个遍历，外层的遍历参数相当于length
 * - 初始状态：dp[i][i] = true, dp[i][i + 1] = s[i] === s[j]。为什么dp[i][i + 1]也要在初始状态里算好呢，因为状态方程里面dp[i + 1][j - 1]要求j - i >= 2   
 * 
 * js整数最大数: Number.MAX_SAFE_INTEGER
 */

/**
 * @param s: A string
 * @return: An integer
 */
let minCut = function (s) {
    // write your code here
    if (s === null || s.length === 0) {
        return 0;
    }
    
    let isPalindrome = getPalindrom(s);
    let dp = Array(s.length + 1);
    dp[0] = -1;
    for (let i = 1; i <= s.length; i++) {
        dp[i] = i - 1;
        for (let j = 0; j < i; j++) {
            if (isPalindrome[j][i - 1]) {
                dp[i] = Math.min(dp[i], dp[j] + 1);
            }
        }
    }
    
    return dp[s.length];
    
}

let getPalindrom = function(s) {
    let isPalindrome = Array(s.length).fill(null).map(() => Array(s.length).fill(false));
    for (let i = 0; i < s.length; i++) {
        isPalindrome[i][i] = true;
    }
    
    for (let i = 0; i < s.length - 1; i++) {
        isPalindrome[i][i + 1] = s[i] === s[i + 1];
    }
    
    for (let len = 2; len < s.length; j++) {
        for (let i = 0; i + len < s.length; i++) {
            isPalindrome[i][i + len] = isPalindrome[i + 1][i + len - 1] && s[i] === s[i + len];
        }
    }
    
    return isPalindrome;
}