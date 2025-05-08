const fs = require('fs');
const dbUrl = 'db/animes.json'

function listAnimes() {
    fs.readFile(dbUrl, 'utf8', (err, animesData) => {
     if (err) throw err
     console.log(animesData)
    })
 }
 
 listAnimes()