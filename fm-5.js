// merge sort
const arr = [5, 6, 9, 2, 1, 4, 8, 10, 3, 7];
const size = arr.length;
let temp = [];

const mergeSort = (start, mid, end) => {
    let firstArrCount = start;
    let i = 0;
    let secondArrCount = mid + 1;
    for (i = firstArrCount; firstArrCount <= mid && secondArrCount <= end; i++){
        if (arr[firstArrCount] < arr[secondArrCount]){
            temp[i] = arr[firstArrCount++];
        }
        else {
            temp[i] = arr[secondArrCount++];
        }
    }
    while (firstArrCount <= mid) {
        temp[i++] = arr[firstArrCount++];
    }
    while (secondArrCount <= end) {
        temp[i++] = arr[secondArrCount++];
    }
    for (i = start; i <= end; i++){
        arr[i] = temp[i];
    }
}

const sorting = (startPoint, endPoint) => {
    if (startPoint >= endPoint) {
        return;
    }
    let midPoint = Math.floor((startPoint + endPoint) / 2);
    sorting(startPoint, midPoint); //works with left array
    sorting(midPoint + 1, endPoint); //works with right array
    mergeSort(startPoint, midPoint, endPoint);
}

const display = arr => {
    let data = `${arr[0]}`;
    for (let i = 1; i < arr.length; i++){
        data += `,${arr[i]}`;
    }
    console.log(`[${data}]`);
}

console.log('BEFORE:');
display(arr);
sorting(0, size - 1);
console.log('AFTER:');
display(arr);