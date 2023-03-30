/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     let answerList = []
//     let a =0
//     let b = nums.length
//     for (let i = 0; i < nums.length; i++) {
            
//             if (nums[a]+nums[b] == target) {
//                 answerList = [a,b]
//                 return answerList
//             }else if(nums[a]+nums[b] < target){
//                 a++ 
//             }else{
//                 b--
//             }
             
            
        
        
//     }
// };
//暴力解法
// var twoSum = function(nums, target) {

//     let a = 0
//     let b = 0
//     for (let index = 0; index < nums.length; index++) {    
//         for (let j = 0; j < nums.length; j++) {
//             if (index === j) {
//                 break
//             }
//             if (nums[index]+nums[j] === target) {
//                 a = index
//                 b = j
//                 return [a,b]
//             }   
//         }
//     }

// };
//对象登记表
var twoSum = function(nums, target) {
    let register = {}
    for (let i= 0; i< nums.length; i++) {
        let num = nums[i]
        let want = target - num
        if (want in register) {
            return [i,register[want]]
        }else{
            register[num] = i
        }
        
    }
};
// @lc code=end

