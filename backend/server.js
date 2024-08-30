const express = require("express");

const app = express(); //instance of express

app.get("/", (req, res) => {
    res.send("API is Running");
});

//help of the app variable we can start our own server now
app.listen(5000,console.log("Server has started....."));


//to check the server run command-> node file name