import express from "express";

const app = express();

console.log("Welcome to nodejs world!");

app.get("/", function (req, res) {
  res.send("Hello");
});

app.listen(4000, () => {
  console.log(`Server Running On 4000`);
});
