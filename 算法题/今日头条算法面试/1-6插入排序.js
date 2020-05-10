function insertSort(arr){
  const {length}=arr
  let temp
  for(let i=1;i<length;i++){
    let j=i
    temp=arr[i]
    while(j>0&&arr[j-1]>temp){
      arr[j]=arr[j-1]
      j--
    }
    arr[j]=temp
  }
  return arr
}

console.log(insertSort([4,2,6,1,3,7,2]))

function insertSort(arr){
  const {length}=arr
  for(let i=1;i<length;i++){
    let j=i
    temp=arr[i]
    while(j>0&&arr[j-1]>temp){
      arr[j]=arr[j-1]
      j--
    }
    arr[j]=temp
  }
}


function insertSort(arr){
  const {length}=arr
  for(let i=1;i<length;i++){
    let j=i
    let temp=arr[i]
    while(j>0&&arr[j-1]>temp){
      arr[j]=arr[j-1]
      j--
    }
    arr[j]=temp
  }
  return arr
}

function insertSort(arr){
  const {length}=arr
  for(let i=1;i<length;i++){
    let j=i
    let temp
    while(j>0&&arr[j-1]>temp){
      arr[j]=arr[j-1]
      j--
    }
    arr[j]=temp
  }
  return arr
}