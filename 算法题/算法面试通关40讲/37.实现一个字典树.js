/* 
  208. 实现 Trie (前缀树)

  实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。

  示例:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // 返回 true
trie.search("app");     // 返回 false
trie.startsWith("app"); // 返回 true
trie.insert("app");   
trie.search("app");     // 返回 true
说明:

你可以假设所有的输入都是由小写字母 a-z 构成的。
保证所有输入均为非空字符串。

*/

var TrieNode = function () {
  this.next = {}
  this.isEnd = false
}

var Trie = function () {
  this.root = new TrieNode()
}

Trie.prototype.insert = function (word) {
  if (!word) return false

  let node = this.root
  for (let i = 0; i < word.length; i++) {
    if (!node.next[word[i]]) {
      node.next[word[i]] = new TrieNode()
    }
    node = node.next[word[i]]
  }
  node.isEnd = true
  return true
}

Trie.prototype.search = function (word) {
  if (!word) return false
  let node = this.root
  for (let i = 0; i < word.length; i++) {
    if (node.next[word[i]]) {
      node = node.next[word[i]]
    } else {
      return false
    }
  }
  return node.isEnd
}

Trie.prototype.startsWith = function (prefix) {
  if (!prefix) return true
  let node = this.root
  for (let i = 0; i < prefix.length; i++) {
    if (node.next[prefix[i]]) {
      node = node.next[prefix[i]]
    } else {
      return false
    }
  }
  return true
}