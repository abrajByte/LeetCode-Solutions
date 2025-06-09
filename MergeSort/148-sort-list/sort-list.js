/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function Node(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var findMiddle = function(head){
    let slow = head
    let fast = head.next
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

var merge = function(leftHead, rightHead){
    const tmp = new Node(-1)
    let curr = tmp
    while(leftHead && rightHead){
        if(leftHead.val < rightHead.val){
            curr.next = leftHead
            leftHead = leftHead.next
        }else{
            curr.next = rightHead
            rightHead = rightHead.next
        }
        curr = curr.next
    }
    
    if(leftHead){
        curr.next = leftHead
    }else{
        curr.next = rightHead
    }
    return tmp.next
}


var sortList = function(head) {
    if(head === null || head.next == null){
        return head
    }
    let mid = findMiddle(head)
    let leftHead = head
    let rightHead = mid.next
    mid.next = null
    leftHead = sortList(leftHead)
    rightHead = sortList(rightHead)
    return merge(leftHead, rightHead)
};