//Const that are required------------------------------------
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const md5 = require("md5");


//app related tasks------------------------------------------
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//connecting mongoDB server-----------------------------------
const uri = "mongodb+srv://utkarshdev2411:Mini%40123456@miniprojectcluster.tyllvaw.mongodb.net/VidyaShakti";
mongoose.connect(uri);


const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    phone: String
});
const User = new mongoose.model("Auth", userSchema);


const userSchema2 = new mongoose.Schema({
    fundname: String,
    name: String,
    email: String,
    description: String,
    goalamount: String,
    bankdetails: String,
    Country: String,
    age: String


});
const UserData = new mongoose.model("User", userSchema2);
//Get requests
app.get("/", function (req, res) {
    res.render("index");

})
app.get("/login", function (req, res) {
    res.render("loginpage");

})
app.get("/signup", function (req, res) {
    res.render("signuppage");

})
app.get("/user", function (req, res) {
    res.render("userpage");
})
app.get("/fundsform", function (req, res) {
    res.render("fundsraisingform");
})



//post request-------------------------------------


app.post("/login", function (req, res) {
    const username = req.body.username;
    const password = md5(req.body.password);
    const email = req.body.username;


    User.findOne({ email: username })
        .then((foundUser) => {
            if (foundUser && foundUser.password === password) {
                res.render("userpage", { foundUser: foundUser });




            } else {
                res.status(400).send("Invalid credentials");
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send("Invalid email");
        });
});

app.post("/signup", function (req, res) {
    const newUser = new User({
        email: req.body.email,
        password: md5(req.body.password),
        name: req.body.fullname,
        phone: req.body.phone
    });
    newUser.save()
        .then(() => {
            console.log("New Signup Info Saved");
            res.redirect("/login");

        })
        .catch((error) => {

            console.log("Error durig new signup info");

            console.log(error);


        });
});

app.post("/fundsform", function (req, res) {

    const newUserData = new UserData({
        fundname: req.body.fundraiserName,
        name: req.body.organizerName,
        email: req.body.email,
        description: req.body.description,
        goalamount: req.body.goalAmount,
        bankdetails: req.body.bankNumber,
        Country: req.body.country,
        age: req.body.age


    });
    newUserData.save()
        .then(() => {
            console.log("Funds are raised");

            res.redirect("/login",);

        })
        .catch((error) => {

            console.log("Error durig raising funds");

            console.log(error);


        });
});


//Listen portion--------------------------------------
app.listen(3000, function () {
    console.log("Server is running on port 3000");
});