#!/usr/bin/env node
// 'use strict'
const db = require('./db.js');
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");


// const hash =  crypto.createHash('sha256').update('user2').digest('base64');

const app = express();
const port = process.env.PORT || 3903;
const Users = require("./routes/users")
const Operators = require("./routes/operators")
const Writer = require("./routes/writer")
// const Data = require("./routes/data")
const User = require("./models/user")
// const Dat = require("./models/dat")
// ---------------------------------

// ______________________________
app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({ extended: false })
    )


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get("/", (req, res) => {


})

app.use("/api/auth", Users)
app.use("/api/operator", Operators)
app.use("/api/record", Writer)

// app.use("/data", Data)



app.listen(port, function () {
    console.log("СЕРВЕР РАБОТАЕТ НА ПОРТУ: " + port)
    // console.log('ШИФР ' + hash);

    // db.sequelize.authenticate()
    db.sequelize.authenticate()
        .then(() => {
            console.log('---BСТАНОВЛЕНО  ЗЄДНАННЯ З БАЗОЮ ДАННИХ');
        })
        .catch(err => {
            console.error('---ПОМИЛКА ЗЄДНАННЯ З БАЗОЮ ДАННИХ:', err);
        });
})


