var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var messages = []
var usernames = []


app.use(express.static('assets'))
app.use(bodyParser.json())

app.get('/messages', function(req, res, next){
  res.status(200).json({messages: messages})
})

app.post('/messages', function (req, res, next) {
  messages.push({ message: req.body.message, username: req.body.username, time: new Date() });
  res.status(200).json({messages: messages})
  console.log(req.body)
  console.log({messages: messages})
})






app.listen(3000, function(){
  console.log("I'm not Listening!")
})
