import React from "react";

function Input(props) {
  return (
    <>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </>
  );
}
export default Input;
