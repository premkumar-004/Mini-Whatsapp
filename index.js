const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const port = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

main().then((res) => {
    console.log("Connection Successful");
})
    .catch(err => {
        console.log(err);
    })

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

//Index Route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", { chats });
})

app.get("/", (req, res) => {
    res.send("Home");
});


app.listen(port, () => {
    console.log(`Listening on port no. : ${port}`);
});