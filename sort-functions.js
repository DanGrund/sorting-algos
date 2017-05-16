//quicksort
quickSort = (array, left, right) => {
  let pivot, partitionIndex;

  if(left < right){
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

partition = (array, pivot, left, right) => {
  let pivotValue = array[pivot],
      partitionIndex = left;

  for(let i = left; i < right; i++){
    if(array[i] < pivotValue){
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

//mergeSort
mergeSort = (array) => {
  //this is how to escape the recurssion. once array is just 1 length long, return immediately
  if (array.length < 2) {
    return array;
  }
  //define the left and right sides of the array
  let left = array.slice(0, Math.floor(array.length / 2));
  let right = array.slice(Math.floor(array.length / 2), array.length);

  //
  return merge(mergeSort(left), mergeSort(right));
}

merge = (left, right) => {
  let sortedArray = [];

  //while both arrays exist
  while (left.length && right.length) {
    //compare left & right 0 index, push smaller & remove from subdivided array
    if (left[0] <= right[0]) {
        sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  //the following lines account for uneven array length
  while (left.length) {
    console.log(left)
    sortedArray.push(left.shift());
  }
  while (right.length) {
    console.log(right)
    sortedArray.push(right.shift());
  }
  console.log(sortedArray)
  return sortedArray;
}
