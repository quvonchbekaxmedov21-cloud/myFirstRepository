const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://quvonchbekaxmedov21_db_user:yd5f0mT5anusEWzm@cluster0.ruwhzct.mongodb.net/Reja?authSource=admin";

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}, 
(err, client) => {
    if(err) console.log("ERROR on connection Mongodb");
    else {
        console.log("Mongodb connection succeed");
        console.log(client);
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
            console.log(
                `the server is running successfully on port: ${PORT}, http://localhost:${PORT}`
            );
        });
    }
});
