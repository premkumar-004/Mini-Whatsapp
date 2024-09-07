const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const port = 8080;

app.set("view engine", "ejs");
app.use("views", path.join(__dirname, "views"));

main().then((res) => {
    console.log("Connection Successful");
})
    .catch(err => {
        console.log(err);
    })

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


app.get("/", (req, res) => {
    res.send("Home");
});



app.listen(port, () => {
    console.log(`Listening on port no. : ${port}`);
});