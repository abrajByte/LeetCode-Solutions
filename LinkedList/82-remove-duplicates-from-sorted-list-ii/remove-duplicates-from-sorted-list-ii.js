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
 /*

 just remove duplicates:
 let currNode = head
    while(currNode){
        while(currNode.next != null && currNode.val == currNode.next.val){
            currNode.next = currNode.next.next
        }
        currNode = currNode.next
    }
    return head


 */
var deleteDuplicates = function(head) {
    let dummy = new ListNode(0, head)
    let prev = dummy
    while(head){
        if(head.next && head.val === head.next.val){
            while(head.next && head.val === head.next.val){
                head = head.next
            }
            prev.next = head.next
        }else{
            prev = prev.next
        }
        head = head.next
    }
    return dummy.next
};