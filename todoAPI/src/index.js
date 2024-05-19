const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;
const todos = [];
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.put("/todos", (req, res) => {
  const tempTodo = action.payload;
  const foundIndex = [...state].indexOf((todo) => todo.id === tempTodo.id);
  const copyState = [...state];
  const spliceResponse = copyState.splice(foundIndex, 1, tempTodo);
  res.send(spliceResponse);
});

app.post("/todos", (req, res) => {
  const todo = req.body;
  let index = 1;
  if (todos.length > 0) {
    index = Math.max(...todos.map((todo) => todo.id)) + 1;
  }
  const tempTodo = { ...todo, id: index };
  todos.push(tempTodo);
  res.json(tempTodo);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
