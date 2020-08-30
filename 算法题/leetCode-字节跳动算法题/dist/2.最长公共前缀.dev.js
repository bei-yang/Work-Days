"use strict";

var longestCommonPrefix = function longestCommonPrefix(strs) {
  if (strs.length == 0) return "";
  var ans = strs[0];

  for (var i = 1; i < strs.length; i++) {
    var j = 0;

    for (; j < ans.length && j < strs[i].length; j++) {
      if (ans[j] != strs[i][j]) break;
    }

    ans = ans.substr(0, j);
    if (ans === "") return ans;
  }

  return ans;
};

console.log(longestCommonPrefix(["aaa", "aa", "aaa"]));