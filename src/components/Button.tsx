import React from "react";

type ButtonProps = {
  children: string;
  onClick: () => void;
  style?: React.CSSProperties;
};

const Button = ({ children, onClick, ...props }: ButtonProps) => {
  return (
    <button
      style={{
        border: "1px solid blue",
        padding: "15px 20px",
        borderRadius: 8,
        backgroundColor: "yellowgreen",
        color: "tomato",
        height: "50px",
        ...props.style,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
