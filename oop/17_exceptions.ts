class Calculator {
    static power(base: number, exponent: number) {
        try {
            if (base < 0 || exponent < 0) {
                throw new Error("n and p should be non-negative");
            }

            if (exponent <= 0) {
                return 1;
            } else {
                return base * this.power(base, exponent - 1);
            }
        } catch (err) {
            console.log(err);
        }
    }
}

function getValues(arr: string[]): number[][] {
    return arr.map(value =>
        [parseInt(value.split(' ')[0]), parseInt(value.split(' ')[1])]
    );
}

(function main() {
    const values1 = "3 5";
    const values2 = "2 4";
    const values3 = "-1 5";
    const arr = [values1, values2, values3];

    const values = getValues(arr);
    values.forEach(value => console.log(Calculator.power(value[0], value[1])));
})();