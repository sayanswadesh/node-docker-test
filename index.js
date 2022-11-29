import express from 'express';

const app = express();
let port = 4000;

console.log('Welcome to nodejs world!');

app.get('/', function (req, res) {
  res.send('Welcome to nodejs api...');
});

app.listen(4000, () => {
  console.log(`Server Running On ${port}`);
});
