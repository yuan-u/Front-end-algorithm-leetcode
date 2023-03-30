/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

//快慢指针
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0
    }
    let lead = 0
    let follow = 0
    while (lead < nums.length) {
        
        if (nums[lead]!==nums[follow]) {
            follow++
            nums[follow] = nums[lead]
        }
        lead++
        
    }
    return follow+1

};


//1 暴力解法
// var removeDuplicates = function(nums) {
//     let resultArray = []
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//            if (i === j) {
//             break
//            }else if (nums[i]===nums[j]) {
            
            
//            }
            
//         }
        
//     }
//     return resultArray

// };

// @lc code=end

