const fs = require('fs');
const dbUrl = 'db/animes.json'

function insertAnimeInDB({id, name, categories, ageClassification, resume}) {
    const anime = {
        id,
        name,
        categories,
        ageClassification,
        resume,
        review: []
    }

    if (fs.existsSync(dbUrl)) {
        fs.readFile(dbUrl, 'utf8', (err, animesData) => {
            if (err) throw err;
            let animes = []
            animes = JSON.parse(animesData)     
            animes.push(anime)
            fs.writeFile(dbUrl, JSON.stringify(animes, null, 2), (err) =>{
                if (err) throw err
                console.log('Anime has been saved!')
            })
        })
    } else {
        const animes = []
        animes.push(anime)
        fs.writeFile(dbUrl, JSON.stringify(animes, null, 2), (err) => {
            if (err) throw err
            console.log('Anime has been saved!')
        })
    }
}

insertAnimeInDB({
    id: 3,
    name: "One Piece",
    categories: ["Shounen", "Adventure", "Comedy"],
    ageClassification: 12,
    resume: "One monkey with body of rubber"

})