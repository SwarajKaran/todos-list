import React from 'react';

export const TodoItem = ({ todo: todo2, onDelete }) => {
  return (
    <div>
      <h3>{todo2.title}</h3>
      <p>{todo2.desc}</p>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          onDelete(todo2);
        }}
      >
        Delete
      </button>
    </div>
  );
};
