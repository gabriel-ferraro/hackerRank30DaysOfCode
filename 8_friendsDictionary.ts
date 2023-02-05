//create a friendsDictionary with the structure: Map<string, number>, by receiving strings as parameter, formated as: "friendName friendNumber"
//after that create a print function that recieves a string parameter - name for searching in the map, if the name exists, return a string:
//"name=number" - if it doesn't exist, return "Not found";

function createDictionary(...friends: string[]) {
    const dictionary = new Map<string, number>();
    for (let i = 0; i < friends.length; i++) {
        let currentMapItem = friends[i].split(' ');

        dictionary.set(currentMapItem[0], parseInt(currentMapItem[1]));
    }
    return dictionary;
}

function searchByName(name: string, map: Map<string, number>) {
    const value = map.get(name);
    return (value) ? (name + "=" + value) : "Not found";
}

(() => {

    const friendsDictionary = createDictionary(
        "sam 99912222",
        "tom 11122222",
        "harry 12299933"
    );

    const namesArray = ["sam", "edward", "harry"];

    namesArray.forEach(name => {
        console.log(searchByName(name, friendsDictionary));
    });
})();

/*
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry
*/