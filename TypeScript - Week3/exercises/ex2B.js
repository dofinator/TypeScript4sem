const fetch = require('node-fetch')

async function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {

    let lukeObj;
    let filmObj;
    let speciesObj;
    let homeObj;

    const name = await fetch("https://swapi.dev/api/people/" + id)
        .then(response => response.json())
        .then(data => (lukeObj = data))
    console.log(lukeObj.name)

    const firstFilm = await fetch(name.films[1])
        .then(response => response.json())
        .then(data => (filmObj = data))
    console.log(filmObj.title)

    const firstSpecies = await fetch(firstFilm.species[3])
        .then(response => response.json())
        .then(data => (speciesObj = data))
    console.log(speciesObj.name)

    const homeWorld = await fetch(firstSpecies.homeworld)
        .then(response => response.json())
        .then(data => (homeObj = data))
    console.log(homeObj.name)

}

getPlanetforFirstSpeciesInFirstMovieForPerson(1)