class Printer<T> {
    printArray(TTypeArray: T[]) {
        for (let i = 0; i < TTypeArray.length; i++) {
            console.log(TTypeArray[i]);
        }
    }
}

class Person {
    constructor(public name: string, public age: number) {}
}

(() => {
    const numberArray = new Array<Number>(1, 2, 3);
    const stringArray = new Array<String>("asd", "dsa", "aaa");
    const personArray = new Array<Person>(new Person("Gabriel", 20), new Person("Ferraro", 15));

    const intPrinter = new Printer<Number>();
    const stringPrinter = new Printer<String>();
    const personPrinter = new Printer<Person>();

    intPrinter.printArray(numberArray);
    stringPrinter.printArray(stringArray);
    personPrinter.printArray(personArray);
})();
