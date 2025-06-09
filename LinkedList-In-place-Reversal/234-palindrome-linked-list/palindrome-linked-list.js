/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head || !head.next){
        return true
    }
    let fast = head
    let slow = head

    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
    }

    let secondHalf = reverseList(slow)
    let firstHalf = head
    let copyOfSecondHalf = secondHalf

    while(secondHalf){
        if(firstHalf.val != secondHalf.val){
            return false
        }
        firstHalf = firstHalf.next
        secondHalf = secondHalf.next
    }
    reverseList(copyOfSecondHalf)

    return true
};

function reverseList(head){
    let prev = null
    let curr = head
    while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}