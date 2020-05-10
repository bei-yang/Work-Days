/* 
  146. LRU缓存机制

  
运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。

获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
写入数据 put(key, value) - 如果密钥已经存在，则变更其数据值；如果密钥不存在，则插入该组「密钥/数据值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。

 

进阶:

你是否可以在 O(1) 时间复杂度内完成这两种操作？
*/

var LRUCache = function (capacity) {
  this.keys = []
  this.cache = Object.create(null)
  this.capacity = capacity
}

LRUCache.prototype.get = function (key) {
  if (this.cache[key]) {
    remove(this.keys, key)
    this.keys.push(key)
    return this.cache[key]
  }
  return -1
}

LRUCache.prototype.put = function (key, value) {
  if (this.cache[key]) {
    this.cache[key] = value
    remove(this.keys, key)
    this.keys.push(key)
  } else {
    this.keys.push(key)
    this.cache[key] = value
    if (this.keys.length > this.capacity) {
      removeCache(this.cache, this.keys, this.keys[0])
    }
  }
}

function remove (arr, key) {
  if (arr.length) {
    const index = arr.indexOf(key)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

function removeCache (cache, keys, key) {
  cache[key] = null
  remove(keys, key)
}


var LRUCache = function (capacity) {
  this.cache = new Map()
  this.capacity = capacity
}

LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    let temp = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, temp)
    return temp
  }
  return -1
}

LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key)
  } else if (this.cache.size >= this.capacity) {
    this.cache.delete(this.cache.keys().next().value)
  }
  this.cache.set(key, value)
}