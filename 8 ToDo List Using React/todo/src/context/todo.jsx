import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const todoData = () => {
  const data = localStorage.getItem("todo");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const TodoProvider = (props) => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState(todoData());
  const [editStatus, seteditStatus] = useState(false);
  const [editId, seteditId] = useState(0);
  return (
    <TodoContext.Provider
      value={{ title, setTitle, task, setTask, editStatus, seteditStatus, editId, seteditId }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

const useTodo = () => useContext(TodoContext);

export { TodoProvider, useTodo };
