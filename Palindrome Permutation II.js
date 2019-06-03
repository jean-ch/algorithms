/**
 * 这题很简单就是写起来有点复杂
 * 首先思路是列出对称的半边string，然后把奇偶情况的中心字符加进去，再把另外半边加上来就好了
 * 怎么得到前半边string呢，是个典型的dfs。那么就需要先求得一个包含所有前半边character的list。
 * 借助一个记录occurance的map就可以得到这个string。
 * 遍历s一遍得到occurance map，顺便可以知道这个s可不可以组成对称string以及中心轴字符存不存在
 * 然后把一半occurance的字符加进list里就可以开始dfs了
 * dfs的时候呢因为要去重所以如果相同的前面字符没有遍历到那么跳过当前字符，一个典型的去重算法
 * - 遍历string的characters：[...s].forEach((c)) or for(let c of s)
 * - 创建一个Boolean数组：new Array(size).fill(false)
 * - 给数组增加一个新的值可以用arr[arr.length] = 0但是对string不能这样做: s[s.length] = 'a'是无效的
 * - js的数组是精度的，1/2 === 0.5,所以for循环里面试图用len/2并不能取整起到过滤奇偶数的效果，应该用(len - 1) /2
 */
/**
 * @param s: the given string
 * @return: all the palindromic permutations (without duplicates) of it
 */
let generatePalindromes = function (s) {
    // write your code here
    let res = [];
    if (s === null || s.length === 0) {
        return res;
    }
    
    let map = new Map();
    let odd = 0;
    [...s].forEach((c) => {
        map.set(c, map.has(c) ? map.get(c) + 1 : 1);
        map.get(c) % 2 === 0 ? odd-- : odd++;
    });
    
    if (odd > 1) {
        return res;
    }
    
    let list = [];
    let mid = '';
    [...map.entries()].forEach((pair) => {
        for(let i = 0; i < (pair[1] - 1) / 2; i++) {
            list[list.length] = pair[0];
        }
        
        if (pair[1] % 2 === 1) {
            mid = pair[0];
        }
    });
    
    getPerm(res, list, mid, new Array(list.length).fill(false), '');
    return res;
    
}

let getPerm = function(res, list, mid, visited, s) {
    if (s.length === list.length) {
        res[res.length] = s + mid + reverse(s);
        return;
    }
    list.forEach((c, i) => {
        if (visited[i]) {
            return;
        }
        
        if (i > 0 && list[i - 1] === list[i] && !visited[i - 1]) {
            return;
        }
        
        
        s += c;
        visited[i] = true;
        getPerm(res, list, mid, visited, s);
        s = s.slice(0, s.length - 1);
        visited[i] = false;
    });
}

let reverse = function(s) {
    let rev = '';
    [...s].forEach(c => rev = c + rev);
    return rev;
}