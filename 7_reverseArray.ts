//reversing a number array, and printing it as a string separated by spaces; example:

//numberArray == [4, 3, 2, 1]
//reversedNumberArray == [1, 2, 3, 4];
//print the string: "1 2 3 4";

function reverseArray(arr: number[]) {
    for (let i = 0; i < arr.length / 2; i++) {
        let swap = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = swap;
    }
    return arr;
}

function addSpaces(str: string) {
    return str.split(',').join(' ');
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    console.log(addSpaces(reverseArray(arr).toString()));
}