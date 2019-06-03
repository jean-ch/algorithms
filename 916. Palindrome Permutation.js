/**
 * @param s: the given string
 * @return: if a permutation of the string could form a palindrome
 */
let canPermutePalindrome = function (s) {
    // write your code here
    if (s === null) {
        return false;
    }
    
    if (s.length === 0) {
        return true;
    }
    
    let map = new Map();
    let count = 0;
    for (let c of s) {
        if (!map.has(c) || map.get(c) === 0) {
            map.set(c, 1);
            count++;
        } else {
            map.set(c, 0);
            count--;
        }
    }
    
    return count < 2;
}