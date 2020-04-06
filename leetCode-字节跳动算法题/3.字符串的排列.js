var checkInclusion = function(s1, s2) {
  if(s2.indexOf(s1)!==-1||s2.split('').reverse().join('').indexOf(s1)!==-1){
      return true
  }else{
      return false
  }
};

console.log(checkInclusion('abc','bbbca'))