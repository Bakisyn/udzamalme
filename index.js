const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const app = express();
const path = require('path');
const _ = require("lodash");
const compression = require('compression');

app.use(compression());

app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

var randomString = function(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
let stringone = "script-src www.googletagmanager.com https: http: 'unsafe-inline' 'nonce-";
let stringtwo = randomString(12);
let stringthree = "' 'strict-dynamic' ; style-src https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css 'strict-dynamic' 'self' 'nonce-";
let stringfour ="'; img-src  'self' data: https://storage.byggbigger.com/ 'nonce-";
let stringfive="'  'strict-dynamic'; connect-src www.google-analytics.com stats.g.doubleclick.net ampcid.google.com analytics.google.com about: 'self' 'strict-dynamic' 'nonce-";
let stringsix="'; default-src 'self' 'nonce-";
let stringseven ="' 'strict-dynamic'; object-src 'self' 'nonce-";
let stringeight ="'; base-uri 'self'; prefetch-src 'self' 'nonce-";
let stringnine = "'; font-src 'self'  'nonce-";
let stringten ="';";
let cspstring = stringone.concat(stringtwo).concat(stringthree).concat(stringtwo).concat(stringfour).concat(stringtwo).concat(stringfive).concat(stringtwo).concat(stringsix).concat(stringtwo).concat(stringseven).concat(stringtwo).concat(stringeight).concat(stringtwo).concat(stringnine).concat(stringtwo).concat(stringten);
app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", cspstring);
    return next();
});

app.get('/', (req, res) => {
  res.render("swedishlocal",{nonce: stringtwo});
});
app.get('/en', (req, res) => {
  res.render("englishlocal",{nonce: stringtwo});
});
app.get('/notfound', (req, res) => {
  res.render("notfound",{nonce: stringtwo});
});

app.post("/", function(req,res){
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;
  let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: username,
      pass: password,
    },
        tls: {     //ovo mogu da obrisem kad ne budem slao sa localhosta
            rejectUnauthorized: false
        }
    });

    const output = `
      <p>You have a new inquiry</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: <a href="mailto:${req.body.email}">${req.body.email}</a> </li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;

  const mailOptions = {
    from: req.body.email,
    to: "byggbigger@gmail.com",
    subject: `${req.body.subject}  from  ${req.body.name}   -   ${req.body.email}`,
    html: output
  }


  transporter.sendMail(mailOptions, function(error,info){
    if(error){
      res.send('error');
    }else{
    res.send('Success');
    }
  });

});

app.post("/en", function(req,res){
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;
  let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: username,
      pass: password,
    },
        tls: {     //ovo mogu da obrisem kad ne budem slao sa localhosta
            rejectUnauthorized: false
        }
    });

    const output = `
      <p>You have a new inquiry</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: <a href="mailto:${req.body.email}">${req.body.email}</a> </li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;

  const mailOptions = {
    from: req.body.email,
    to: "byggbigger@gmail.com",
    subject: `${req.body.subject}  from  ${req.body.name}   -   ${req.body.email}`,
    html: output
  }


  transporter.sendMail(mailOptions, function(error,info){
    if(error){
      res.send('error');
    }else{
    res.send('Success');
    }
  });

});
app.get("/:sometext", function(req, res) {
        const requestedTitle = _.lowerCase(req.params.sometext);

        if(requestedTitle === "en"){
          res.redirect('/en');
        }else if(requestedTitle === "/"){
          res.redirect('/');
        }else{
          res.redirect('/notfound');
        }
});



const port = process.env.PORT || 3000;
app.listen(port, () => {
});
