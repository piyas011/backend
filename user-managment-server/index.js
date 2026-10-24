import express from "express";
const app = express();
const port = process.env.port || 4000;

const users = [
  { id: 1, name: "Piyas", email: "apiyas221@gmail.com" },
  { id: 2, name: "ahmed", email: "apiyas761@gmail.com" },
  ,
];

app.get("/", (req, res) => {
  res.send(users);
});

app.get("/users", (req, res) => {
  res.send("User Page");
});

app.listen(port, () => {
  console.log("Example app listening on port ", port);
});
