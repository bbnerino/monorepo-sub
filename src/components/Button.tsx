import React from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
  style?: React.CSSProperties;
};

const Button = ({ text, onClick, ...props }: ButtonProps) => {
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
