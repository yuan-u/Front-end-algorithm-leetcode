/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// set 过滤 空间复杂度 O(n) 
// var hasCycle = function(head) {
//    let filter = new Set()
//    while (head) {
//     if (filter.has(head)) {
//         return true
//     }else{
//         filter.add(head)
//     }
//     head = head.next
//    } 
//    return false
// };
// 
//快慢指针 空间复杂度 O(1) 
var hasCycle = function(head) {
    let fast = head
    let slow = head
    while (fast&&fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            return true
        }
    }
    return false
};
// @lc code=end

