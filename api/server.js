
const FormValidation = require("../src/Helpers/validate.js")
const express = require('express');



var bodyParser = require('body-parser');

const mysql = require('mysql');

var cors = require('cors');

//Server create
const server = express();

server.listen('3001', () => {
  console.log('Server started on port 3001');
})

//Include json 

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// aprove connection to server
server.use(cors());


// API/contact
server.post('/API/contact', function (req, res) {
  data = req.body;


const isValid = FormValidation.formValidate(data)

if (isValid) {
  res.json({ statusCode: 200, message: "Your message has been sent!" });
  
 } else {
  res.json({ statusCode: 400, message: "JSON formatted message containing the list of errors" });
 }

  

  

});









