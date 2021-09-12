const connectToMongo = require('./db');
const express = require('express');


connectToMongo();

const app = express()
const port = 5000

//to use req body 
app.use(express.json())

//Available routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

