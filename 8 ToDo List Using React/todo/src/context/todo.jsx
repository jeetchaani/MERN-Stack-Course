import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const TodoProvider = (props) => {
  const [title, setTitle] = useState("");
  return (
    <TodoContext.Provider value={{title, setTitle}}>
      {props.children}
    </TodoContext.Provider>
  );
};

const useTodo = () => useContext(TodoContext);

export { TodoProvider, useTodo };
