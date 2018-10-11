'use strict';

(function main() {
  let count = 0;
  let qSorted = [];
  let mSorted = [];
  let bSorted = [];

  const data1 = [89, 30, 25, 32, 72];
  // console.log('data1 =', data1);
  count = 0;
  qSorted = qSort(data1);
  console.log(`qSort required ${count} operations to sort data1`, qSorted);
  count = 0;
  mSorted = mSort(data1);
  console.log(`mSort required ${count} operations to sort data1`, mSorted);
  count = 0;
  bSorted = bSort(data1);
  console.log(`bSort required ${count} operations to sort data1`, bSorted);

  const data2 = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87,28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];
  // console.log('data2 =', data2);
  count = 0;
  qSorted = qSort(data2);
  console.log(`qSort required ${count} operations to sort data2`, qSorted);
  count = 0;
  mSorted = mSort(data2);
  console.log(`mSort required ${count} operations to sort data2`, mSorted);
  count = 0;
  bSorted = bSort(data2);
  console.log(`bSort required ${count} operations to sort data2`, bSorted);

  const data3 = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87,28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5, 89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87,28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5, 89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87,28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];
  // console.log('data3 =', data3);
  count = 0;
  qSorted = qSort(data3);
  console.log(`qSort required ${count} operations to sort data3`, qSorted);
  count = 0;
  mSorted = mSort(data3);
  console.log(`mSort required ${count} operations to sort data3`, mSorted);
  count = 0;
  bSorted = bSort(data3);
  console.log(`bSort required ${count} operations to sort data3`, bSorted);

  
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  // QuickSort
  // Write a function qSort that sorts a dataset using the quicksort algorithm. The dataset to to sort is 89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5
  function qSort(arr, start=0, end=arr.length) {
    count++;
    if (start >= end) {
      return arr;
    }
    const mid = qsPart(arr, start, end);
    arr = qSort(arr, start, mid);
    arr = qSort(arr, mid+1, end);
    return arr;
  }
  
  function qsPart(arr, start, end) {
    count++;
    const pivot = arr[end-1];
    let j = start;
    for (let i=start; i<end-1; i++) {
      if (arr[i] <= pivot) {
        swap(arr, i, j);
        j++;
      }
    }
    swap(arr, end-1, j);
    return j;
  }
  
  // MergeSort
  // Write a function mSort that sorts the dataset above using the mergesort algorithm.
  function mSort(arr) {
    count++;
    if (arr.length <= 1) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    left = mSort(left);
    right = mSort(right);
    return merge(left, right, arr);
  }
  
  function merge(left, right, arr) {
    count++;
    let leftInd = 0;
    let rightInd = 0;
    let outputInd = 0;
    while (leftInd < left.length && rightInd < right.length) {
      if (left[leftInd] < right[rightInd]) {
        arr[outputInd++] = left[leftInd++];
      } else {
        arr[outputInd++] = right[rightInd++];
      }
    }
    for (let i=leftInd; i<left.length; i++) {
      arr[outputInd++] = left[i];
    }
    for (let i=rightInd; i<right.length; i++) {
      arr[outputInd++] = right[i];
    }
    return arr;
  }
  
  // Add functionality to both the qSort and mSort programs so that the programs shows how many operations it took to sort the same dataset
  /************ DONE ************/
  
  // Bucket sort
  // Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are.
  function bSort(arr, low, hi) {
    let allBuckets = [];
    for (let i=0; i<arr.length; i++) {
      count++;
      let currVal = arr[i];
      if (!allBuckets[currVal-1]) {
        allBuckets[currVal-1] = 1;
      } else {
        allBuckets[currVal-1]++;
      }
    }
    // console.log('allBuckets', allBuckets);

    let output = [];
    for (let i=0; i<allBuckets.length; i++) {
      if (allBuckets[i]) {
        for (let j=0; j<allBuckets[i]; j++) {
          count++;
          output.push(i+1);
        }
      }
    }
    return output;
  }
  
  // Sort in place
  // Write an algorithm to shuffle an array into a random order in-place (i.e. without creating a new array).
  
  // Sorting books
  // Imagine that I gave you twenty books to sort in alphabetical order. How would you go about it? Can you express this as an algorithm?
})();
