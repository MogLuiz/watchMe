// Assets
import Icon from "./Icon";

// Types
import { ButtonHTMLAttributes } from "react";

// Styles
import "../styles/button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  selected: boolean;
}

const Button: React.FC<ButtonProps> = ({
  iconName,
  title,
  selected,
  ...rest
}) => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <button
      type="button"
      {...(selected && { className: "selected" })}
      {...rest}
    >
      <Icon name={iconName} color={selected ? "#FAE800" : "#FBFBFB"} />
      {title}
    </button>
  );
};

export default Button;
