console.log("web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1: kirish codelari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// 2: session larga bogliq bolgan narsaalar

// 3 : viewsga bogliq codelar
app.set("views", "views");
app.set("view engine", "ejs");


// 4: routing ga bogliq codelar
app.get("/", function(req, res) {
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
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`the server is running successfully on port: ${PORT}`);
});
