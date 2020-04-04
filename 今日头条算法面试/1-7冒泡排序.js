function bubbleSort(arr){
  const {length}=arr

  for(let i=0;i<length;i++){
    for(let j=0;j<length-i-1;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
      }
    }
  }

  return arr
}

console.log(bubbleSort([9,8,7,6,5,4,4,3,2,1]))

function bubbleSort(arr){
  const {length}=arr
  for(let i=0;i<length;i++){
    for(let j=0;j<length-i-1;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
      }
    }
  }
  return arr
}