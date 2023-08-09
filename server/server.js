//importing express module
import express from 'express';
import mongoose from "mongoose"

//app config
const app = express();
const port = process.env.PORT || 9000;

// middleware 

//DB config
const connection_url = 'mongodb+srv://admin:B8IkQNFv1hf12UnX@cluster0.3hn1m09.mongodb.net/?retryWrites=true&w=majority';
// mongodb+srv://admin:<password>@cluster0.3hn1m09.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//api routes
app.get("/", (req, res) => res.status(200).send("hello world!"));

//listen
app.listen(port, () => console.log(`listening on localhost:${port}`));