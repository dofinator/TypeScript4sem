// The reduce-method

// A
console.log(" ******************************The Reduce-method*****************************")

const all = ["Lars", "Peter", "Jan", "Bo"];

console.log("Seperated  by comma [" + all.join(", ") + "]")
console.log("Seperated  by space [" + all.join(" ") + "]")
console.log("Seperated  by # [" + all.join("# ") + "]")

// B
// Create myReduce function

const numbers = [2, 3, 67, 33];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(numbers.reduce(reducer))

// C
const members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 },
]

let result = members.reduce((accumulator, currentValue) => accumulator + currentValue.age / members.length, 0)

console.log(result)
