class BSTNode {
    left: BSTNode | null;
    right: BSTNode | null;
    data: number;

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Solution {

    static getHeight(root: BSTNode): number {
        if (!root) { //if no root, return height as -1;
            return -1;
        }
        if (!root.left && !root.right) {
            return 0;
        }

        //recursive case
        let leftHeight = this.getHeight(root.left!);
        let rightHeight = this.getHeight(root.right!);
        return Math.max(leftHeight, rightHeight) + 1; //returning the longest root-to-leaf number of nodes.
    }

    static insert(root: BSTNode, data: number): BSTNode {
        if (!root) {
            return new BSTNode(data);
        }
        else {
            let cur: BSTNode = null!;
            if (data <= root.data) {
                cur = this.insert(root.left!, data);
                root.left = cur;
            }
            else {
                cur = this.insert(root.right!, data);
                root.right = cur;
            }
            return root;
        }
    }
}

(function main() {
    let root: BSTNode = null!;
    const numbers = [7, 3, 5, 2, 1, 4, 6, 7];

    numbers.forEach(data => {
        root = Solution.insert(root, data);
    });

    
    let height = Solution.getHeight(root!);
    console.log("BST height: " + height);
    console.log(root);
})();

//7, 3, 5, 2, 1, 4, 6, 7