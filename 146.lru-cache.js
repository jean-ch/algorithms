/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.priority = [];
  this.cache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.cache.has(key)) {
    let index = this.priority.indexOf(key);
    this.priority.splice(index, 1);
    this.priority.unshift(key);
    return this.cache.get(key);
  } else {
    return -1;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

  if (this.cache.has(key)) {
    this.get(key);
    this.cache.set(key, value);
    return
  }

  if (this.priority.length === this.capacity) {
    remove = this.priority.pop();
    this.cache.delete(remove);
  }
  
  this.priority.unshift(key);
  this.cache.set(key, value);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

