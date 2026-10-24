import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("my first server server is running");
});

app.get("/home", (req, res) => {
  res.send("home page");
});
app.get("/dashboard", (req, res) => {
  res.send("dashboard page");
});

app.get("/about", (req, res) => {
  res.send("about pages");
});

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
