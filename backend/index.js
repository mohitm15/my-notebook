const connectToMongo = require('./db');
const express = require('express');


connectToMongo();
var cors = require('cors')
const app = express()
// const port = 5000

//to use req body 
app.use(cors())
app.use(express.json())

//Available routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(process.env.PORT  , () => {
  console.log(`my-notebook backend listening at https://my-notebook-mohit.herokuapp.com:${process.env.PORT }`)
})

