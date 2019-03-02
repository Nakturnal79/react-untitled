import React from "react";

export const Filter = ({ genre, onClick, selected }) => {
  return (
    <ul className="list-group">
      {genre.map(item => (
        <li
          key={item._id}
          className={
            selected === item._id ? "list-group-item active" : "list-group-item"
          }
          style={{ cursor: "pointer" }}
          onClick={() => onClick(item)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};
