import React from "react";

export const Like = props => {
  return (
    <i
      style={{ cursor: "pointer" }}
      className={props.liked === true ? "fa fa-heart" : "fa fa-heart-o"}
      aria-hidden="true"
      onClick={props.onClick}
    />
  );
};
