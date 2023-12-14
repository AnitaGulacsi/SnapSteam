import { FC } from "react";

interface ButtonProps {
  type: string;
  children: React.ReactNode;
}

const ReturnClassNameByType = (type: string) => {
  switch (type) {
    case "home":
      return "w-64 rounded-2xl border border-teal-600 text-teal-800 hover:bg-teal-600 hover:text-white";
    case "form":
      return "w-32 p-2 rounded-2xl bg-teal-600 text-white hover:underline";
    case "social":
      return "w-56 rounded-2xl border-2 border-teal-300 text-teal-400 hover:bg-teal-600 hover:text-white";
    default:
      return "";
  }
};

export const Button: FC<ButtonProps> = ({ children, type }) => {
  const className = ReturnClassNameByType(type);

  return <button className={`${className}`}>{children}</button>;
};
