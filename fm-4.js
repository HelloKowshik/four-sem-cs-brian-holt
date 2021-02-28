// Insertion Sort

const display = arr => {
    let data = `${arr[0]}`;
    for (let i = 1; i < arr.length; i++){
        data += `,${arr[i]}`;
    }
    console.log(`[${data}]`);
}

const insertionSort = arr => {
    const arrLength = arr.length;
    for (let i = 1; i < arrLength; i++){
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

const arr = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
const arr1 = ['f', 'b', 'e', 'a', 'g', 'i', 'c', 'd'];
console.log('BEFORE: ');
display(arr1);
console.log('-------------------------');
let x = insertionSort(arr1);
console.log(x);