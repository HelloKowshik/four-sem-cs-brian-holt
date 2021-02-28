// quick sort

const quickSort = arr => {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    // console.log(`left:${left}, right:${right}, pivot:${pivot}, arr:${arr}`);
    return [...quickSort(left), pivot, ...quickSort(right)];
}



const arr = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
const arr1 = ['f', 'b', 'e', 'a', 'g', 'i', 'c', 'd'];
let x = quickSort(arr1);
console.log(x);