const cors = require('cors')
const express = require('express'); 
const app = express()//

app.use(cors())

app.get('/', (req, res) => {
    return res.json([
        { name: 'Genival' },
        { name: 'Neto'}
    ])
})

app.listen('4567');