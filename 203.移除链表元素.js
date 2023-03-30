/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
//递归
// var removeElements = function(head, val) {

//  if (head ===null) {
//     return head
//  }

//  head.next = removeElements(head.next,val)
//  return head.val === val ? head.next : head
// };



//遍历 哨兵节点
// var removeElements = function(head, val) {
//     let ele = {
//         next:head
//     }
//     let p = ele
//     // console.log(p);
//     while (p.next) {
//         // console.log('111', ele.next);
//         // console.log('222', p.next);
//         if (p.next.val === val) {
//             p.next = p.next.next
//         }else{
//             p = p.next
//         }
//     }
//     return ele.next

// };
// @lc code=end

