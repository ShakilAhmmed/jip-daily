
const Node = require('./Node');


class Stack
{
    top;
    constructor() {
        this.top = null;
    }

    push(value) {
        const node = new Node(value);
        if(!this.top) {
            this.top = node;
        } else {
            let temp = this.top;
            this.top = node;
            this.top.next = temp;
        }
    }

    pop() {
        if(!this.top) {
            return null;
        } 
        let data = this.top.value;
        this.top = this.top.next;

        return data;
    }

    peek() {
        if(!this.top) {
            return null;
        } 

        return this.top.value;
    }

    isEmpty() {
        return !this.peek();
    }
}



let stack = new Stack()
stack.push(5)
stack.push(10)
stack.push(30)

console.log("Stack")
console.log(stack)

console.log("Stack PEEK------>")
console.log(stack.peek())

console.log("Stack POP------>")
console.log(stack.pop())

console.log("Stack AFTER POP------>")
console.log(stack)