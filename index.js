const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require('multer');
const path = require("path");
const fs = require("fs");
const session = require("express-session");
const env = require('dotenv');
const express = require('express');

env.config();
const app = express();

console.log(process.env.URI);

// set an environment mongodb variable if u want faster result yeilds
const url = process.env.URI || 'mongodb+srv://bliss:2eRYfCRdRuVMXi7M@woodland.pfprl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';



mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection;


// parse all the request with body-parser

app.use(bodyParser.urlencoded({ extended: true }));


app.use(session({
	name: 'UserSess',
	resave: false,
	saveUninitialized: false,
	secret: 'mySecret',
	cookie: {
		maxAge: 60 * 60 * 2 * 1000,
		sameSite: true,
		secure: false,
	},

}));


// load routes
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/views/include'));

app.use((err, req, res, next) => {
	res.status(500);
	console.log(err);
	res.render('error', { err });
})

// use ejs to generate html instead of writing html manually for all pages
app.set("view engine", "ejs");
app.set("views", [path.resolve(__dirname, "views"), path.resolve(__dirname, "views/admin"), path.resolve(__dirname, "views/teacher"), path.resolve(__dirname, "views/student")]);


