/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.catch = new Map()
    this.max = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.catch.has(key)) {
        let tmp = this.catch.get(key)
        this.catch.delete(key)
        this.catch.set(key,tmp)
        return tmp
    }
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.catch.has(key)) {
        this.catch.delete(key)
        
    }else if (this.catch.size >= this.max) {
        this.catch.delete(this.catch.keys().next().value)
    }
    this.catch.set(key,value)
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

