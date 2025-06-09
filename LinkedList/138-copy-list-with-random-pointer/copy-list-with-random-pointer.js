/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    let tmp = head
    let dummy = new _Node(-1)
    let res = dummy
    // create copy node and insert in between
    while(tmp != null){
        const node = new _Node(tmp.val)
        node.next = tmp.next
        tmp.next = node
        tmp = tmp.next.next
    }
    tmp = head

// link the random of the copy node
    while(tmp != null){
        let copyNode = tmp.next
        if(tmp.random){
            copyNode.random = tmp.random.next
        }else{
            copyNode.random = null
        }
        tmp = tmp.next.next
    }
    tmp = head

// seperate the copynode and orginal node
    while(tmp != null){
        res.next = tmp.next
        tmp.next = tmp.next.next
        res = res.next
        tmp = tmp.next
    }
    return dummy.next
};