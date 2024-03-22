const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT || 4800;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/signup", require("./routes/signup"));
app.use("/api/login", require("./routes/login"));
app.use("/api/signout", require("./routes/signout"));
app.use("/api/refresh-token", require("./routes/refreshToken"));
app.use("/api/todos", require("./routes/todos"));
app.use("/api/user", require("./routes/user"));

 
app.get('/', function(req, res){
    res.send('Inicializando hack!')
})


app.listen(port, function(){
    console.log(`> Server is running on port: ${port}`)
})
