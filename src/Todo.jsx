import React from "react";

const Todo = ({ todo }) => {
  const { title, completed } = todo;
  return (
    <div className="card">
      <p>Title: {title}</p>
      <p>Completed: {
        completed? "Is Completed": "Is not completed yet"
        }</p>
    </div>
  );
};

export default Todo;
