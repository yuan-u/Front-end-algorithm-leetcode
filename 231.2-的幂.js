/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
//位运算
//注意优先级
var isPowerOfTwo = function(n) {
    return n>0 &&  (n&(n-1) )=== 0
};
// @lc code=end

