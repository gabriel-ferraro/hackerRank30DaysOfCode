function swap(arr: number[], a: number, b: number): void {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

function bubbleSort(a: number[]): number {
    let n = a.length;
    let totalNumberOfSwaps = 0;

    for (let i = 0; i < n; i++) {
        // Track number of elements swapped during a single array traversal
        let numberOfSwaps = 0;

        for (let j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                swap(a, j, (j + 1));
                numberOfSwaps++;
                totalNumberOfSwaps++;
            }
        }

        // If no elements were swapped during a traversal, array is sorted
        if (numberOfSwaps == 0) {
            break;
        }
    }

    return totalNumberOfSwaps;
}

(() => {
    let numbersArray = [1, 2, 3];
    //let numbersArray = [4, 3, 1, 2];
    //let numbersArray = [3, 2, 1];

    console.log(`Array is sorted in ${bubbleSort(numbersArray)} swaps.`);
    console.log("first element " + numbersArray[0]);
    console.log("last element " + numbersArray[numbersArray.length - 1]);

    console.log(numbersArray);
})();