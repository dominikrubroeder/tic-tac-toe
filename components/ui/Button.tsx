import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="uppercase text-sm text-app-gray-400 bg-app-navy-700 px-4 py-2 rounded-md">
      {children}
    </button>
  );
};

export default Button;
