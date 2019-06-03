/**
 * @param s: A string
 * @return: Whether the string is a valid palindrome
 */
let isPalindrome = function (s) {
    if (s === null) {
        return false;
    }
    
    if (s.length === 0) {
        return true;
    }
    
    let ls = s.toLowerCase();
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (!isAlphaNumeric(ls[left])) {
            left++;
            continue;
        } 
        
        if (!isAlphaNumeric(ls[right])) {
            right--;
            continue;
        }
        
        if (ls[left] !== ls[right]) {
            return false;
        }
        
        left++;
        right--;
    }
    
    return true;
}

let isAlphaNumeric = function(c) {
    return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
}

