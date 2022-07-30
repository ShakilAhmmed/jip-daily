
const Node = require('./Node')


class LinkedList {

    head;
    tail;

    add(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    insertAtBegin(value) {
        let newNode = new Node(value);
        let temp = this.head;
        this.head = newNode;
        this.head.next = temp;
    }

    reverse() {

        let current = this.head;
        let prev = null;

        this.tail = this.head;
        while(current) {
            let next = current.next;

            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }

    traverse() {
        let head = this.head;
         while(head) {
             console.log(head.value)
             head = head.next;
         }
    }

}

let linkedList = new LinkedList()
linkedList.add(5)
linkedList.add(10)
linkedList.add(30)

console.log(linkedList)

console.log("Traversing...")

linkedList.traverse();

console.log("Insert at begin...")

linkedList.insertAtBegin(20)

console.log(linkedList)

console.log("After Insert Traversing...")

linkedList.traverse();

console.log("Reversing...")

linkedList.reverse();

console.log("After Reverse Traversing...")

linkedList.traverse();