class LLNode {
    data: number;
    next: LLNode | null;
    constructor(d: number) {
        this.data = d;
        this.next = null;
    }
}

function insert(head: LLNode, data: number): LLNode {
    let current = head;

    if (current == null) {
        return new LLNode(data);
    } else {
        while (current.next != null) {
            current = current.next;
        }

        current.next = new LLNode(data);
        return head;
    }
}

function display(head: LLNode): void {
    let start = head;
    let result = "";
    while (start != null) {
        result += start.data + " ";
        start = start.next!;
    }
    console.log(result);
}

function main() {
    let head: LLNode | null = null;
    let N = parseInt(readLine());

    while (N-- > 0) {
        let element = parseInt(readLine());;
        head = insert(head!, element);
    }
    display(head!);
}