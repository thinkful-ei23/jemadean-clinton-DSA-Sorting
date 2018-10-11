'use strict';

const data1 = [89, 30, 25, 32, 72];
const data2 = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87,28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// QuickSort
// Write a function qSort that sorts a dataset using the quicksort algorithm. The dataset to to sort is 89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5
function qSort(arr, start=0, end=arr.length) {
  if (start >= end) {
    return arr;
  }
  const mid = qsPart(arr, start, end);
  arr = qSort(arr, start, mid);
  arr = qSort(arr, mid+1, end);
  return arr;
}

function qsPart(arr, start, end) {
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

console.log(`qSort([${data1}]) =`, qSort(data1));
console.log(`qSort([${data2}]) =`, qSort(data2));

// MergeSort
// Write a function mSort that sorts the dataset above using the mergesort algorithm.

// Add functionality to both the qSort and mSort programs so that the programs shows how many operations it took to sort the same dataset

// Bucket sort
// Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are.

// Sort in place
// Write an algorithm to shuffle an array into a random order in-place (i.e. without creating a new array).

// Sorting books
// Imagine that I gave you twenty books to sort in alphabetical order. How would you go about it? Can you express this as an algorithm?