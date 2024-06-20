import React from "react";

const Button = ({ text, onClick, ...props }: any) => {
  return (
    <button
      style={{
        border: "1px solid blue",
        padding: "15px 20px",
        borderRadius: 8,
        backgroundColor: "yellowgreen",
        ...props.style,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
