class Queue {
    collection = new Array<string>();

    enqueue(element: string): void { //adds to the start of the queue
        this.collection.push(element);
    }

    dequeue(): string | undefined { //deletes and return from the start of the queue
        return this.collection.shift();
    }

}

class Stack {
    count = 0;
    storage = new Array<string>();

    push(value: string): void { //adds to the end of the stack
        this.storage[this.count] = value;
        this.count++;
    }

    pop(): string | undefined { //removes and returns from the end of the stack
        if (this.count == 0) {
            return undefined;
        }

        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
}

class Solution {

    queue = new Queue();
    stack = new Stack();

    pushCharacter(character: string): void {
        this.stack.push(character);
    }

    enqueueCharacter(character: string): void {
        this.queue.enqueue(character);
    }

    popCharacter(): string | undefined {
        return this.stack.pop();
    }

    dequeueCharacter(): string | undefined {
        return this.queue.dequeue();
    }
}

(function main(input: string) {
    // Convert input String to an array of characters:
    const stringArr = input.split('');

    // Create a Solution object:
    const p = new Solution();

    // Enqueue/Push all chars to their respective data structures:
    for (let c of stringArr) {
        p.pushCharacter(c);
        p.enqueueCharacter(c);
    }

    // Pop/Dequeue the chars at the head of both data structures and compare them:
    let isPalindrome = true;
    for (let i = 0; i < stringArr.length / 2; i++) {
        if (p.popCharacter() !== p.dequeueCharacter()) {
            isPalindrome = false;
            break;
        }
    }

    //Finally, print whether string s is palindrome or not.
    console.log("The word, " + input + ", is " + ((!isPalindrome) ? "not a palindrome." : "a palindrome."));
})("racecar");