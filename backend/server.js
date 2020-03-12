const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const queue = require('./queue');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

const Users = require('./users')
const giveaway = require('./giveaway')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(cors());
app.use(express.json());


app.use('/user',Users);
app.use('/giveaway', giveaway);
app.use('/queue', queue);

const uri = process.env.ATLAS_URI;
//console.log(uri)
mongoose.connect(uri, { useFindAndModify: false,useUnifiedTopology: true ,useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
