// Opgave 3

let names = ["Lars", "Peter", "Jan", "Bo"];

Array.prototype.filterByMaxLength = function(maxLength) {
    const newArray = [];
    this.map(x => {
        if(x.length <= maxLength){
            newArray.push(x)
        }
    })
    return newArray
}

console.log(names.filterByMaxLength(3))


