const express = require("express");
const app =  express();
const cors = require("cors");
const bodyParser = require("body-parser");
const {PORT} = require("./config");
const connection = require("./config/connection");

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send({message: "Welcome to mysql API"});
});
app.use("/todos", require("./routes/todos"));
app.use("/users", require("./routes/users"));

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("Connected to database");
    
})

app.listen(PORT,() => {
    console.log(`This app listen on PORT ${PORT}`);    
});