//importing express module
import express from 'express';

//app config
const app = express();
const port = process.env.PORT || 9000;

//api routes
app.get("/", (req, res) => es.status(200).send("hello world!"));

//listen
app.listen(port, () => console.log(`listening on localhost:${port}`));