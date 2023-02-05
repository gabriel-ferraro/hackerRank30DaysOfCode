class Difference {
    private __elements: number[];
    private maximumDifference: number;

    constructor(numbers: number[]) {
        this.__elements = numbers;
        this.computeDifference();
    }

    computeDifference() {
        let maximumDif = 0, currentDif = 0;
        for (let i = 0; i < this.__elements.length; i++) {
            for (let j = 0; j < this.__elements.length; j++) {
                if (i == j) {
                    continue;
                }

                Math.abs(currentDif = (this.__elements[i] - this.__elements[j]));

                if (currentDif > maximumDif) {
                    maximumDif = currentDif;
                }
            }
        }
        this.maximumDifference = maximumDif;
    }

    getMaximumDifference() {
        return this.maximumDifference;
    }

}

(function main() {
    let difference = new Difference([1, 2, 5]);
    let difference2 = new Difference([8, 19, 3, 2, 7]);
    let difference3 = new Difference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


    console.log(difference.getMaximumDifference());
    console.log(difference2.getMaximumDifference());
    console.log(difference3.getMaximumDifference());
})();