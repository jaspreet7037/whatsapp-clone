import express from 'express';

const app = express();
const port = process.env.PORT || 9000;

app.get("/", (req, res) => es.status(200).send("hello world!"));

app.listen(port, () => console.log(`listening to port:${port}`));