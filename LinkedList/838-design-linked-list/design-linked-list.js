var Node = function(val){
    return {
        val,
        next: null
    }
}

var MyLinkedList = function() {
    this.head = null
    this.tail = null
    this.length = 0
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index >= this.length){
        return -1
    }
    let currNode = this.head
    for(let i=0;i<index;i++){
        currNode = currNode.next
    }
    return currNode.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const node = new Node(val)
    node.next = this.head
    this.head = node
    if(this.tail == null){
        this.tail = node
    }
    this.length++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const node = new Node(val)
    if(this.tail != null){
        this.tail.next = node
    }
    this.tail = node
    if(this.head == null){
        this.head = node
    }
    this.length++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index > this.length){
        return
    }else if(index == this.length){
        this.addAtTail(val)
        return
    }else if(index == 0){
        this.addAtHead(val)
        return
    }
    const node = new Node(val)
    let prevNode = null
    let currNode = this.head

    for(let i=0;i<index;i++){
        prevNode = currNode
        currNode = currNode.next
    }
    prevNode.next = node
    node.next = currNode
    this.length++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index >= this.length){
        return
    }
    if(index == 0){
        const firstNode = this.head
        this.head = firstNode.next
        firstNode.next = null
        this.length--
        return
    }

    let prevNode = null
    let currNode = this.head
    for(let i=0;i<index;i++){
        prevNode = currNode
        currNode = currNode.next
    }
    prevNode.next = currNode.next
    currNode.next = null
    if(index == this.length-1){
        this.tail = prevNode
    }
    this.length--
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */