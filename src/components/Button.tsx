import { FC, ReactNode } from "react";

interface IButton {
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}

const Button: FC<IButton> = ({ disabled = false, onClick, children }) => {
  return (
    <button
      className="border-2 rounded-md disabled:border-orange-200 disabled:bg-white border-orange-400 bg-orange-400 w-48 h-12"
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
