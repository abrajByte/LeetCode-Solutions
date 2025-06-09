/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(k == 0 || !head){
        return head
    }
    let len = 1
    let tail = head
    while(tail.next){
        tail = tail.next
        len++
    }
    if(k%len == 0){
        return head
    }
    k = k%len
    tail.next = head

    let newLastNodeIndex = len - (k%len) - 1
    let newLastNode = head
    while(newLastNodeIndex){
        newLastNode = newLastNode.next
        newLastNodeIndex--
    }
    head = newLastNode.next
    newLastNode.next = null
    return head
};