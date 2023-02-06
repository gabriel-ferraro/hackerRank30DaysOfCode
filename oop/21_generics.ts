class Printer<T> {
    printArray(TTypeArray: T[]) {
        for (let i = 0; i < TTypeArray.length; i++) {
            console.log(TTypeArray[i]);
        }
    }
}

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

(() => {
    const numberArray = new Array<number>(1, 2, 3);
    const stringArray = new Array<string>("asd", "dsa", "aaa");
    const personArray = new Array<Person>(new Person("Gabriel", 20), new Person("Ferraro", 15));

    const intPrinter = new Printer<Number>();
    const stringPrinter = new Printer<String>();
    const personPrinter = new Printer<Person>();

    intPrinter.printArray(numberArray);
    stringPrinter.printArray(stringArray);
    personPrinter.printArray(personArray);
})();
