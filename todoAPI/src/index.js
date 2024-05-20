const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;
const todos = [
  { id: 1, title: "hello" },
  { id: 2, title: "dijsdg" },
  { id: 3, title: "dijdf342sdg" },
];
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.put("/updatetodos", (req, res) => {
  // console.log("req.bog", req.body);
  const tempTodo = req.body;
  const foundIndex = todos.indexOf((todo) => todo.id === tempTodo.id);
  todos[foundIndex] = tempTodo;

  // const copyState = [...state];
  // res.send(copyState.splice(foundIndex, 1, tempTodo));
  res.json(tempTodo);
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

app.delete("/todos/:id", (req, res) => {
  const tempTodoId = parseInt(req.params.id);
  const foundIndex = todos.findIndex((todo) => todo.id === tempTodoId);
  if (foundIndex > -1) {
    const deletedTodos = todos.splice(foundIndex, 1);
    console.log(deletedTodos);
    res.json(deletedTodos);
  } else {
    res.status(404).json({ message: "Todo with id not found " });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
