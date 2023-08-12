//importing express module
import express from 'express';
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";

//app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1650337",
    key: "c4c2af3049498f0a5b13",
    secret: "950621952ce49d232e49",
    cluster: "ap2",
    useTLS: true
});

// middleware
app.use(express.json());

//DB config
const connection_url = 'mongodb+srv://admin:<password>@cluster0.3hn1m09.mongodb.net/?retryWrites=true&w=majority';
// mongodb+srv://admin:<password>@cluster0.3hn1m09.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(connection_url,{
    //useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//api routes
app.get("/", (req, res) => res.status(200).send("hello world!"));

app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(err);
        }
    })
})


app.post("/messages/new", (req, res) => {
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data) => {
        if(err) {
            res.status(500).set(err)
        } else {
            res.status(201).send(data)
        }
    })
})

//listen
app.listen(port, () => console.log(`listening on localhost:${port}`));