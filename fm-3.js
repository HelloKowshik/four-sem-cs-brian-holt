// Bubble Sort

const display = arr => {
    let data = `${arr[0]}`;
    for (let i = 1; i < arr.length; i++){
        data += `,${arr[i]}`;
    }
    console.log(`[${data}]`);
}

const bubbleSort = arr => {
    for (let i = 0; i < arr.length; i++){
        let swapped = false;
        for (let j = 0; j < arr.length - i; j++){
            // console.log(`Items compared: [${arr[j]}, ${arr[j + 1]}]`);
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
                // console.log(`Swapped: [${arr[j]}, ${arr[j + 1]}]`);
            } else {
                // console.log('=>No Items Swapped!');
            }
        }
        if (!swapped) {
            break;
        }
        console.log(`Total Iteration: ${i + 1}`);
        display(arr);
    }
}

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
const arr1 = ['f', 'b', 'e', 'a', 'g', 'i', 'c', 'd'];
console.log(`BEFORE: `);
display(arr1);
bubbleSort(arr1);