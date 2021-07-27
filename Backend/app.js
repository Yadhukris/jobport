const express = require('express');

const cors = require('cors');
const { getMaxListeners } = require('process');
var bodyparser = require('body-parser');
// app.use(bodyparser.json());
// require("./db/connect")
const app = new express();
const jwt = require('jsonwebtoken')



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());


admin = "admin@gmail.com";
password = "Aa@123456"



app.post("/admin/login", async (req, res) => {




    if (admin === req.body.email && password === req.body.password) {

        res.status(201).json("user added");

    } else {
        res.status(409).json(message = "You are not admin");
    }





})



//for alumni

const alumnidata = require('./src/model/alumnidata')

app.post('/insert', function (req, res) {

    console.log(req.body);

    var alumni = {
        uname: req.body.alumni.uname,
        email: req.body.alumni.email,
        password: req.body.alumni.password,
        hq: req.body.alumni.hq,
        city: req.body.alumni.city,


    }
    var alumni = new alumnidata(alumni);
    alumni.save();
});


// app.get('/:id',  (req, res) => {

//     const id = req.params.id;
//       alumnidata.findOne({"_id":id})
//       .then((alumni)=>{
//           res.send(alumni);
//       });
//   })

username="Abcd@gamil.com"
app.post('/login', (req, res) => {
    let userData = req.body
    
      
        if (!username) {
          res.status(401).send('Invalid Username')
        } else 
        if ( password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: username+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      
    })

    app.get('/alumni',function(req,res){
    
        alumnidata.find()
                    .then(function(alumni){
                        res.send(alumni);
                    });
    });


app.listen(3000, function () {
    console.log('listening to port 3000');
});