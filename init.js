const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main().then((res) => {
    console.log("Connection Successful");
})
    .catch(err => {
        console.log(err);
    })

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let allChats = [
    {
        from: "Neha",
        to: "kakkar",
        msg: "Hello Kakkar",
        created_at: new Date()
    },
    {
        from: "Lakshmi",
        to: "Saraswati",
        msg: "Hello Saru",
        created_at: new Date()
    },
    {
        from: "Varun",
        to: "Vishal",
        msg: "Hello Vishal",
        created_at: new Date()
    },
    {
        from: "Mastan",
        to: "Pata Bhai",
        msg: "Hello Pata",
        created_at: new Date()
    },
    {
        from: "Surya",
        to: "Naresh",
        msg: "Hello Naresh",
        created_at: new Date()
    }
];

Chat.insertMany(allChats);