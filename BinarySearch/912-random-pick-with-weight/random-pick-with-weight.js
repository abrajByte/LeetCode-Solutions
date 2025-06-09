/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.prefixSums = [];
    this.totalSum = 0;

    for (let weight of w) {
        this.totalSum += weight;
        this.prefixSums.push(this.totalSum);
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let target = Math.random() * this.totalSum;
    let left = 0, right = this.prefixSums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (this.prefixSums[mid] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */