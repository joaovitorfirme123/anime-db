const fs = require('fs');
const animes = []

function insertAnimeInDB({id, name, categories, ageClassification, resume}) {
    const anime = {
        id,
        name,
        categories,
        ageClassification,
        resume,
        review: []
    }
    animes.push(anime)
    //console.log("Anime added:", anime)
}

function listAnimes(animes) {
   // console.log("My animes:", animes)
}

insertAnimeInDB({
    id: 1,
    name: "Naruto",
    categories: ["Shounen", "Adventure", "Comedy"],
    ageClassification: 12,
    resume: "one kid with foxy inside of him, dattebayo"
})

listAnimes(animes)

fs.writeFile('animes.json', JSON.stringify(animes, null, 2), (err) => {
    if (err) throw err
    console.log('Anime has been saved!')
})

fs.readFile('animes.json', 'utf8', (err, animes) => {
    if (err) throw err;
    const jsonAnimes = JSON.parse(animes)
    console.log(jsonAnimes)
})