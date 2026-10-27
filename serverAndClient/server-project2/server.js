import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
  { id: 4, name: "Alice Williams", email: "alice.williams@example.com" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  res.send({ status: "success", message: "User created successfully" });
  const newUser = req.body;
  users.push(newUser);
});

app.listen(PORT, () => {
  console.log("Server is running Port : ", PORT);
});
