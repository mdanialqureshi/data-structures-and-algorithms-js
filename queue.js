function Queue() {
    collection = [];

    this.print = function() {
        console.log(collection);
    }

    this.enqeue = element => {
        collection.push(element)
    }

    this.deqeue = () => collection.shift()

    this.front = () => collection[0]

    this.size = () => collection.length

    this.isEmpty = () => collection.length === 0
}

var testQueue = new Queue();
testQueue.enqeue("a");
testQueue.enqeue("b");
testQueue.enqeue("c");
testQueue.enqeue("a");
testQueue.enqeue("a");
console.log(testQueue.size())
console.log(testQueue.deqeue(), testQueue.deqeue());
console.log(testQueue.front());
console.log(testQueue.size())
