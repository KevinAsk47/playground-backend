const express = require('express')

const app = express()

// MIDDLEWARE
app.use('/api', (req, res) => {
    res.send("Hola")
})

app.listen(4000, () => console.log("App listening on port 4000"))