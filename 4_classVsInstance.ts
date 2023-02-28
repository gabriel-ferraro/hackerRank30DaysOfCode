class Person {
    constructor(public age: number) {
        if (age < 0) {
            console.log("Age is not valid, setting age to 0.");
            this.age = 0;
        }
    }

    amIOld() {
        if (this.age < 13) {
            console.log("You are young.");
        } else if (this.age >= 13 && this.age < 18) {
            console.log("You are a teenager.");
        } else {
            console.log("You are old.");
        }
    }

    yearPasses() {
        this.age++;
    }
}

function main() {
   
    const personArr = [new Person(4), new Person(10), new Person(15), new Person(17)];

    personArr.forEach(person => {
        person.amIOld();
        for (let i = 0; i < 3; i++) {
            person.yearPasses();
        }
        person.amIOld();
        console.log();
    });
}

main();