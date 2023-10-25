import React, { useEffect } from "react";
import { useTodo } from "../../context/todo";
import './main.css';
export default function Main() {
  const state = useTodo();
  const { title, setTitle, task, setTask } = state;
  const addTodo = () => {
    //check for empty
    if (title !== "") {
      //store to local storage
      setTask([...task, { title: title, date: Date.now() }]);

      setTitle("");
    }
  };
  const deleteTodo = (id) => {
    const updateTodo = task.filter((currItem) =>{
      return currItem.date!==id;
    });
    setTask(updateTodo);
  };
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(task));
  }, [task]);
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul className="item-list">
        {task.map((item, index) => {
          return (
            <li key={index}>
              {item.title} <span onClick={()=>deleteTodo(item.date)} className="delete-item">-</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
