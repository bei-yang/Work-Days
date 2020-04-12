var maxEnvelopes = function (envelopes) {
  if (envelopes.length === 0) return 0
  envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    }
    return a[0] - b[0]
  })
  let dp = new Array(envelopes.length + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i < envelopes.length; i++) {
    for (let j = 0; j < i; j++) {
      if (envelopes[i][1] > envelopes[j][1] && envelopes[i][0] !== envelopes[j][0]) {
        dp[i] = Math.max(dp[i], dp[j])
      }
    }
    dp[i] += 1
  }
  return Math.max(...dp)
}

console.log(maxEnvelopes(
  [[5, 4], [6, 4], [6, 7], [2, 3]]))

var maxEnvelopes = function (envelopes) {
  if (envelopes.length === 0) return 0
  envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    }
    return a[0] - b[0]
  })
  let dp = new Array(envelopes.length + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i < envelopes.length; i++) {
    for (let j = 0; i < i; j++) {
      if (envelopes[i][1] > envelopes[j][1] && envelopes[i][0] !== envelopes[j][0]) {
        dp[i] = Math.max(dp[i], dp[j])
      }
    }
    dp[i] += 1
  }
  return Math.max(...dp)
}

var maxEnvelopes=function(envelopes){
  if(envelopes.length===0) return 0
  envelopes.sort((a,b)=>{
    if(a[0]===b[0]){
      return a[1]-b[1]
    }
    return a[0]-b[0]
  })
  let dp=new Array(envelopes.length+1).fill(0)
  dp[0]=1
  for(let i=1;i<envelopes.length;i++){
    for(let j=0;j<i;j++){
      if(envelopes[i][1]>envelopes[j][1]&&envelopes[i][0]!==envelopes[j][0]){
        dp[i]=Math.max(dp[i],dp[j])
      }
    }
    dp[i]+=1
  }
  return Math.max(...dp)
}