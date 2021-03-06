// Opgave 2. A

//Example of Filter method
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log(words)
const result = words.filter(word => word.length > 6);
console.log(result);

//MyFilter with callback
console.log(" A *********************************************************** A")
function myFilter(array, callback){
    return callback(array)
}

const filterArray = (array) => {
    const newArray = [];
    array.map(x => {
        if(x.length > 6){
            newArray.push(x)
        }
    })
    return newArray
}

console.log(myFilter(words, filterArray))

// Opgave 2. B
console.log(" B *********************************************************** B")
const bArray = [1,2,3,4,5,65,7];

function myMap(array, callback){
    return callback(array);
}

const mapArray = (array) => {
    const newArray = [];
    array.forEach(x => {
        newArray.push(x)
    });
    return newArray;
}

console.log(myMap(bArray, mapArray))