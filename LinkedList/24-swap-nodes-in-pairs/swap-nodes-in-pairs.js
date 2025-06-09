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
var swapPairs = function(head) {
    if(!head || !head.next){
        return head
    }
    let prev = null
    let curr = head
    head = head.next
    while(curr && curr.next){
        let nextPair = curr.next.next
        let second = curr.next

        second.next = curr
        curr.next = nextPair

        if(prev){
            prev.next = second
        }
        prev = curr
        curr = nextPair
        
    }
    return head
};