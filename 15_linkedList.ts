//Linked List Node
class LLNode {
    data: number;
    next: LLNode | null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    length: number;
    head: LLNode | null;

    constructor() {
        this.length = 0;
        this.head = null;
    }

    insert(element: number) {
        let node = new LLNode(element);
        if (this.head === null) {
            this.head = node;
        } else {
            let currentNode = this.head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }

        this.length++;
    }

    display(): void {
        let start = this.head;
        let result = "";
        while (start != null) {
            result += start.data + " ";
            start = start.next!;
        }
        console.log(result);
    }

}

(function main() {
    const elements = [1, 2, 3];
    let linkedList = new LinkedList();

    elements.forEach(element => linkedList.insert(element));
    linkedList.display();
})();