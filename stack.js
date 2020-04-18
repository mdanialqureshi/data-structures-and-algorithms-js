/* Stack class */

// using arrays for stack

// let heading_h1 = document.getElementById("title"); works too
let heading_h1 = document.querySelector("h1");


function isPalindrome(input) {

    let letters = []; //stack 
    let rword = "";

    // push on to stack
    for (let i = 0; i < input.length; i++) {
        letters.push(input[i]); //char at i
    }

    //pop off stack
    for (let i = 0; i < input.length; i++) {
        rword += letters.pop();
    }

    if (rword == input) {
        heading_h1.innerHTML = `${input} is a palindrome!`
    } else {
        heading_h1.innerHTML = `${input} is NOT a palindrome!`
    }
}

isPalindrome("racecar");

// implementing a stack
var Stack = function () {

    this.count = 0;
    this.storage = {}; //empty object

    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    }


    this.pop = function () {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function () {
        return this.count;
    }

    this.peek = function () {
        return this.storage[this.count - 1];
    }
}

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.size())

// //another implementation

class Stack2 {

    constructor() {
        this.count = 0;
        this.storage = {}; //empty object
    }

    push(value) {
        this.storage[this.count] = value;
        this.count++;
    }


    pop() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    size() {
        return this.count;
    }

    peek() {
        return this.storage[this.count - 1];
    }

}


var myStack2 = new Stack2();
myStack2.push(1);
myStack2.push(2);
myStack2.push(3);
console.log(myStack2.size())
console.log(myStack2.peek());
console.log(myStack2.pop());
console.log(myStack2.peek());
console.log(myStack2.pop());
console.log(myStack2.size())

console.log("jeyuu" + myStack2.count);