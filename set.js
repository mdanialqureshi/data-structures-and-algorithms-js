/* Sets */

function mySet() {

    var collection = [];

    this.has = function(element){
        return (collection.indexOf(element) !== -1);
    }

    this.values = function() {
        return collection;
    }

    this.add = function(element) {
        if (!this.has(element)){ //no duplicates in a set
            collection.push(element);
            return true;
        } else {
            return false;
        }
    }

    this.remove = function(element){
        if(this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index,1); //take out element at array at indez splice
            return true;
        } else {
            return false;
        }
    }

    this.size =  () =>  collection.length


    this.union = function(otherSet){
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(element => {
            unionSet.add(element);
        });
        secondSet.forEach(function(element){
            unionSet.add(element);
        })
        return unionSet;
    }

    this.intersection = function(otherSet){
        var intersectionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();

        firstSet.forEach(element => {
            if(otherSet.has(element)){
                intersectionSet.add(element);
            }
        })
        return intersectionSet;
    }

    this.difference = function(otherSet){
        var differenceSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet();

        firstSet.forEach(element => {
            if (!secondSet.has(element)){
                differenceSet.add(element);
            }
        })
        return differenceSet;
    }

    this.subset = function(otherSet) {
        var firstSet = this.values();
        // every method tests if all elements in array pass test provided
        // so this is a boolean
        return firstSet.every(value => otherSet.has(value))
    }
}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("d");
setB.add("a");
console.log(setA.subset(setB)); // is it a subset
console.log(setA.intersection(setB).values())
console.log(setA.union(setB).values());
console.log(setB.remove("s"));
console.log(setB.remove("a"));



