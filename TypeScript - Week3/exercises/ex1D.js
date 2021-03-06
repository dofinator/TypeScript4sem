const { getSecureRandoms } = require('./ex1B')

// PLAIN PROMISE

getSecureRandoms([1,2,3,4]).then(x => console.log(x))


// ASYNC
async function getAsyncResult() {
    const result = await getSecureRandoms([1, 2, 3, 4])
    console.log(result)

}

//getSecureRandoms([2,4,6,8]).then(x => console.log(x))
//getAsyncResult()

