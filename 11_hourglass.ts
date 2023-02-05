/*
make a function that finds the greatest sum in a hourglass, example:
const vectorOfHourglasses = [
    [2, 2, 2, 1, 1, 1],
    [0, 2, 0, 0, 1, 0],
    [2, 2, 2, 1, 1, 1],
    [1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0]
];

greatest sum of above vector is 14

restrictions: each hourglass is formed by a 3X3 vector, but only the 3 upper, 3 lower and middle item are considered for the sum:
1 1 1
9 1 9
1 1 1 sum of this hourglass == 7
*/

//greatest hourglass sum for following vector is 7:
const hourglassesVector = [
    [1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0]
];

const hourglassesVector2 = [
    [2, 2, 2, 1, 1, 1],
    [0, 2, 0, 0, 1, 0],
    [2, 2, 2, 1, 1, 1],
    [1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0]
];

function calculateHourGlassSum(hourglasses: number[][]) {
    let maxHourglassSum = -63; //the least possible sum is -63, since the problem had a constraint in wich the value could only be around -9 and 9

    for (let i = 0; i < 4; i++) {
        let [a, b, c] = [hourglasses[i], hourglasses[i + 1], hourglasses[i + 2]]; //selecting the lines of the hourglass through destructuring

        for (let j = 0; j < 4; j++) {
            let sum = a[j] + a[j + 1] + a[j + 2] + b[j + 1] + c[j] + c[j + 1] + c[j + 2] //selecting the elements column position for summing

            if (sum > maxHourglassSum) {
                maxHourglassSum = sum;
            }
        }
    }
    return maxHourglassSum;
}

(() => {
    console.log(calculateHourGlassSum(hourglassesVector));
    console.log(calculateHourGlassSum(hourglassesVector2));
})();

//hourglasses for testing:
// 1 1 1   1 1 0   1 0 0   0 0 0
//   1       0       0       0
// 1 1 1   1 1 0   1 0 0   0 0 0

// 0 1 0   1 0 0   0 0 0   0 0 0
//   1       1       0       0
// 0 0 2   0 2 4   2 4 4   4 4 0

// 1 1 1   1 1 0   1 0 0   0 0 0
//   0       2       4       4
// 0 0 0   0 0 2   0 2 0   2 0 0

// 0 0 2   0 2 4   2 4 4   4 4 0
//   0       0       2       0
// 0 0 1   0 1 2   1 2 4   2 4 0