import React from "react";
import { useTodo } from "../../context/todo";
export default function Main() {
  const state = useTodo();
  const { title, setTitle } = state;
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add</button>
      <p>{title}</p>
    </div>
  );
}
