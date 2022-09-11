import styles from "./button.module.css";
import classnames from "classnames";

export enum ButtonType {
  Primary,
  Secondary,
  Danger,
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: ButtonType;
  text: string;
}

export function Button({
  buttonType,
  text,
  ...htmlButtonProps
}: ButtonProps): JSX.Element {
  const buttonClass = classnames(styles.button, {
    [styles.primary]: buttonType === ButtonType.Primary,
    [styles.secondary]: buttonType === ButtonType.Secondary,
    [styles.danger]: buttonType === ButtonType.Danger,
  });

  return (
    <button className={buttonClass} {...htmlButtonProps}>
      {text}
    </button>
  );
}

const defaultProps: ButtonProps = {
  buttonType: ButtonType.Primary,
  text: "Button",
};

Button.defaultProps = defaultProps;
