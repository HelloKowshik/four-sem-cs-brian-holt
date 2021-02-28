function crossAdd(input) {
    const answer = [];
    for (let i = 0; i < input.length; i++) {
        let goingUp = input[i];
        let goingDown = input[input.length-1-i];
        answer.push(goingUp + goingDown);
    }
    return answer;
}

function makeTuples(input) {
    const answer = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            answer.push([input[i], input[j]]);
        }
    }
    return answer;
}

let arr = [1, 2, 3];
const result1 = crossAdd(arr);
const result2 = makeTuples(arr);
console.log(result2);