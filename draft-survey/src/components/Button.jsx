import React from "react";

const Button = (props) => {
  const { text, color, onClick } = props;

  const buttonStyle = {
    backgroundColor: color || "blue",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text || "Click me"}
    </button>
  );
};

export default Button;
