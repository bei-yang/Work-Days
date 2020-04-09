/* 
Input：

'1024word'
' -1024word'
'word1024'
'10word24'

Output:

1024
-1024
0
10

*/

function parseInt (val) {
  if (typeof val !== 'string') {
    return 0
  }
  let match = val.toString().trim().match(/[+|-]{0,1}[0-9]*/g)[0]
  if (!match) return 0
  return Number(match)
}


function parseInt (val) {
  if (typeof val !== 'string') {
    return 0
  }
  let match = val.toString().trim().match(/[+|-]{0,1}[0-9]*/g)[0]
  if (!match || match === '-' || match === '+') return 0
  return Number(match)
}

function parseInt (val) {
  if (typeof val !== 'string') {
    return 0
  }
  let match = val.toString().trim().match(/[+|-]{0,1}[0,9]*/g)[0]
  if (!match || match === '-' || match === '+')
    return Number(match)
}
console.log(parseInt('-word1024'))

function parseInt (val) {
  if (typeof val !== 'string') {
    return 0
  }
  let match = val.toString().trim().match(/[+|-]{0,1}[0-9]*/g)[0]
  if (!match || match === '-' || match === '+') {
    return 0
  }
  return Number(match)
}

function parseInt (match) {
  if (typeof val !== 'string') {
    return 0
  }
  let match = val.toString().trim().match(/[+|-]{0,1}[0,9]*/g)[0]
  if (!match || match === '-' || match === '+') {
    return 0
  }
  return Number(match)
}
