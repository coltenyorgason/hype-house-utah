import express from 'express';

const app = express();
const port = 5173;

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.json());

app.get('/', () => {})

app.listen(port, () =>
  console.log(`Running on server http://localhost:${port}/`)
);


