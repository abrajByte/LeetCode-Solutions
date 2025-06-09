/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

 /*
    let fast = head
    for(let i=0;i<n;i++){
        fast = fast.next
    }
    let slow = head
    while(fast.next != null){
        fast = fast.next
        slow = slow.next
    }
    if(fast === null){
        return head.next
    }
    const deletNode = slow.next
    slow.next = deletNode.next
    deletNode.next = null
    return head

 */
var removeNthFromEnd = function(head, n) {
    let fast = head
    let slow = head
    while(fast.next != null){
        fast = fast.next
        if(n > 0){
            n--
        }else{
            slow = slow.next
        }
    }
    if(n){
        return head.next
    }
    const deletNode = slow.next
    slow.next = deletNode.next
    deletNode.next = null
    return head
};