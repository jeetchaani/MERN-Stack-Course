import React, { useEffect } from "react";
import { useTodo } from "../../context/todo";
import "./main.css";
export default function Main() {
  const state = useTodo();
  const {
    title,
    setTitle,
    task,
    setTask,
    editStatus,
    seteditStatus,
    editId,
    seteditId,
  } = state;
  const addTodo = () => {
    //check for empty
    if (title !== "") {
      //store to local storage
      setTask([...task, { title: title, date: Date.now() }]);

      setTitle("");
    }
  };
  const deleteTodo = (id) => {
    const updateTodo = task.filter((currItem) => {
      return currItem.date !== id;
    });
    setTask(updateTodo);
  };
  const editTodo = (id) => {
    //change the button name
    seteditStatus(true);
    //hold id
    seteditId(id);
    //copy data to input field
    let editText = task.find((textItem) => {
      return textItem.date === id;
    });
    setTitle(editText.title);
  };
  const editAction = () => {
    //update data
    if(title!=="") {
      setTask(
        task.map((currentItem) => {
          if (currentItem.date === editId) {
            return { ...currentItem, title: title };
          }
          return currentItem;
        })
      );
    }
    //empty text box
     setTitle("");
    //change edit button
    seteditStatus(false);
  };
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(task));
  }, [task]);
  return (
    <div>
       <div class="login-heading">
            <h1>Your To-Do List</h1>
      </div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {editStatus === false ? (
        <button onClick={addTodo}>Add</button>
      ) : (
        <button onClick={editAction}>Edit</button>
      )}

      <ul className="item-list">
        {task.map((item, index) => {
          return (
            <li key={index}>
              {item.title}
              <span
                onClick={() => deleteTodo(item.date)}
                className="delete-item"
              >
                -
              </span>
              <span className="edit-item" onClick={() => editTodo(item.date)}>
                Edit
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
