const connectToMongo = require("./Db");
const express = require('express')


connectToMongo();


const app = express()
const port = 3000

app.use(express.json())
// Routes Available
app.use('/api/auth',require('./Routes/auth'))
app.use('/api/note',require('./Routes/note'))




app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})