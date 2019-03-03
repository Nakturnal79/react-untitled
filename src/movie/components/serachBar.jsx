import React from "react";

export const SearchBar = props => {
  return (
    <div className="form-group">
      <input
        onChange={e => props.onChange(e)}
        value={props.value}
        type="text"
        className="form-control"
        id="formGroupExampleInput"
        placeholder="Search.."
      />
    </div>
  );
};
