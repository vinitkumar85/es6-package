const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const chalk = require('chalk');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(express.static('../build/'));

//Place holder to test ajax call
app.get('/get/userdata', function (req, res) {
  res.send({
    "name": "Vinit",
    "email": "vinit@gmail.com"
  })
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './', '../build/index.html'));
});

app.listen(process.env.PORT || 3008, function () {
  console.log(chalk.green('Express listening on port ') + chalk.bgRed.bold(this.address().port));
});