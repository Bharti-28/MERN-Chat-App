const express = require("express");
const dotenv = require("dotenv");
const{chats} = require("./data/data");

const app = express(); //instance of express
dotenv.config();

app.get("/", (req, res) => {
    res.send("API is Running successfully");
});

app.get("/api/chat", (req, res) => {
    res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

//help of the app variable we can start our own server now
app.listen(5000,console.log(`Server has started on PORT ${PORT}`));


//to check the server run command-> node file name