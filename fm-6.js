//merge sort

const merge = (left, right) => {
    const results = [];    
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        results.push(left.shift());
      }
      else {
        results.push(right.shift());
      }
    }
    return results.concat(left, right);
};

const mergeSort = nums => {
    if (nums.length < 2) {
      return nums;
    }
    const length = nums.length;
    const middle = Math.floor(length / 2);
    let left = mergeSort(nums.slice(0, middle));
    let right = mergeSort(nums.slice(middle));
    return merge(left, right);
};

const arr = [5, 6, 9, 2, 1, 4, 8, 10, 3, 7];
const arr1 = ['f', 'b', 'e', 'a', 'g', 'i', 'c', 'd'];
const a = mergeSort(arr1)
console.log(a);