
const fetch = require("node-fetch")

async function test(id) {
    const name = await fetch("https://swapi.dev/api/people/" + id)
        .then(response => response.json())
        .then(data => data)
    console.log(data)
}

test(1)