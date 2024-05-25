import { FC, ReactNode, memo } from "react";

interface ButtonProps {
  btnStyle?: string;
  btnText: string | ReactNode;
  btnIcon?: ReactNode;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = memo(
  ({ btnStyle, btnText, btnIcon, onClick }) => {
    // defining the button type and styling accordingly
    const styleType =
      btnStyle === "nav"
        ? "hover:bg-secondary-hover rounded-full w-10 h-10 flex items-center justify-center"
        : btnStyle === "sideButton"
        ? "flex flex-row gap-6 w-52 h-10  text-center px-6 whitespace-nowrap py-1 rounded-xl items-center hover:bg-secondary-hover"
        : btnStyle === "tags"
        ? "flex flex-row gap-6 justify-center h-10  px-6 whitespace-nowrap py-1 bg-secondary rounded-3xl items-center hover:bg-secondary-hover"
        : "rounded-full p-3 bg-secondary hover:bg-secondary-hover";

    return (
      <div>
        <button onClick={onClick} className={`${styleType}`}>
          {btnIcon}
          {btnText}
        </button>
      </div>
    );
  }
);

export default Button;
