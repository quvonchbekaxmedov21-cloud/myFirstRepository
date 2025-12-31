console.log("web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

/* const fs = require("fs"); */           // bu author js ga tegishli code

/* let user; 
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data)
    }
}); */      // bu author js ga tegisli code 

// MONGODB call

const db = require("./server").db();

// 1: kirish codelari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// 2: session larga bogliq bolgan narsaalar

// 3 : viewsga bogliq codelar
app.set("views", "views");
app.set("view engine", "ejs");


// 4: routing ga bogliq codelar
/* app.get("/", function(req, res) {
    res.end(`<h1 style="background: red">xush kelibsiz xojayinlar</h1>`);
});
app.get("/hello", function(req, res) {
    res.end(`<h1 style="background: red">hello world by Clay</h1>`);
});
app.get("/home", function(req, res) {
    res.end(`<h1 style="background: red">bu mening komputerim by Clay</h1>`);
});
app.get("/gift", function(req, res) {
    res.end(`<h1 style="background: red">sovgalar bolimiga xush kelibsiz xojayinlar</h1>`);
}); */

app.post("/create-item", (req, res) => {
    console.log("user entered /create-item")
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        if(err) {
            console.log(err);
            res.end('something went wrong');
        } else {
            res.end("successfully added");
        }
    });
});

app.get("/", function (req, res) {
    console.log("user entered /")
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            res.render("reja", {items: data});
        }
    });
});

/* app.get('/author', (req, res) => {
    res.render("author", {user: user});
}) */


module.exports = app;