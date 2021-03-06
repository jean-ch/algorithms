/**	
 * O(n^2)
 * 找中心点，注意palindrome长度为odd的时候中心点在字符上，even的时候在两个字符中间。所以getPalindrome接收left，right两个参数 
 * s[s.length] === undefined
 * 所以可以不检查s[right]的界限但是要保证left的界限
 */
/**
 * @param s: input string
 * @return: the longest palindromic substring
 */
const longestPalindrome = function (s) {
    if (s === null || s.length === 0) {
        return 0;
    }
    
    let max = 0;
    let longestStr = '';
    for (let i = 0; i < s.length; i++) {
    	for (let j = 0; j < 2; j++) {
    		let left = i;
    		let right = i + j;
    		let palindrome = getlongestPalindrome(s, left, right);
    		if (palindrome.length > max) {
	            max = palindrome.length;
	            longestStr = palindrome;
	        }
        }
    }
    
    return longestStr;
};

// 为啥要传left，right而不是中心点index呢，因为中心点可能在两个字符中间呀！当palindrome长度位偶数的时候
const getlongestPalindrome = function(s, left, right) {
	while (s[left] && s[left] === s[right]) {  //s[right]可以是undefined但是s[left]不能是undefined
		left--;
		right++;
	}

    return s.slice(left + 1, right);
};