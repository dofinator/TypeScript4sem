const fetch = require('node-fetch')

let obj = { name: "", firstFilm: "", firstSpecies: "", homeworld: "" }

function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {
    return new Promise((resolve, reject) => {
        fetch("https://swapi.dev/api/people/" + id)
            .then(response => response.json())
            .then(data => {
                obj.name = data.name
                fetch(data.films[1])
                    .then(response => response.json())
                    .then(data => {
                        obj.firstFilm = data.title
                        fetch(data.species[3])
                            .then(response => response.json())
                            .then(data => {
                                obj.firstSpecies = data.name
                                fetch(data.homeworld)
                                    .then(response => response.json())
                                    .then(data => {
                                        obj.homeworld = data.name
                                    })
                            })
                    })

            })
        setTimeout(()=>resolve(obj),1000)
    })
}




getPlanetforFirstSpeciesInFirstMovieForPerson(1).then(data => console.log(data))


