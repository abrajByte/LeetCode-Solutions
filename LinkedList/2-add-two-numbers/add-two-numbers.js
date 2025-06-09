/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode} l3
 */

 /*

 class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

brute force
let l1Num = 0
    let l2Num = 0
    const l1List = []
    const l2List = []
    const result = []
    let sum = 0

    while(l1!=null){
        l1List.push(l1.val)
        l1 = l1.next
    }

    while(l2!=null){
        l2List.push(l2.val)
        l2 = l2.next
    }

    for(const item of l1List){
        l1Num = l1Num*10+item
    }

    for(const item of l2List){
        l2Num = l2Num*10+item
    }

    sum = l1Num + l2Num
    console.log(l1List)
    console.log(l2List)
    console.log(sum)
    while(sum > 0){
        const digit = sum%10
        result.push(digit)
        sum = Math.floor(sum/10)
    }

    if(sum == 0 && result.length <= 0){
        result.push(0)
    }
    
    console.log(result)

    let head = new Node(result.shift())
    let tmp = head
    for(let i=0;i<result.length;i++){
     const node = new Node(result[i])
        tmp.next = node
        tmp = tmp.next
    }
    console.log(head)
    return head;
 */



var addTwoNumbers = function(l1, l2) {
    let carry = 0
    const head = l1
    let prev = null
    while(l1 || l2 || carry){
        const n1 =  l1 ? l1.val : 0
        const n2 = l2 ? l2.val : 0
        const sum = n1 + n2 + carry
        const digit = sum%10
        carry = Math.floor(sum/10)

        if(l1){
            l1.val = digit
            prev = l1
            l1 = l1.next
        }else{
            prev.next = new ListNode(digit)
            prev = prev.next
        }
        if(l2){
            l2 = l2.next
        }
    }
    return head
};