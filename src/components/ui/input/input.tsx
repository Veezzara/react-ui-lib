import styles from "./input.module.css";
import commonStyles from "../common/common.module.css";
import { useState } from "react";
import { ReactComponent as ShowIcon } from "../assets/ShowPassword.svg";
import { ReactComponent as HideIcon } from "../assets/HidePassword.svg";

export enum InputType {
  Text = "text",
  Password = "password",
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type: InputType;
}

export function Input({ label, ...htmlInputProps }: InputProps): JSX.Element {
  const [visible, setVisible] = useState<boolean>(
    htmlInputProps.type !== InputType.Password
  );

  function toggleVisibility() {
    setVisible((prevState) => {
      return !prevState;
    });
  }

  const inputType = visible ? InputType.Text : InputType.Password;

  return (
    <div className={commonStyles.fieldContainer}>
      {label ? (
        <label className={commonStyles.label} htmlFor={htmlInputProps.name}>
          {label}
        </label>
      ) : undefined}
      <div className={styles.inputContainer}>
        <input
          className={commonStyles.field}
          {...htmlInputProps}
          type={inputType}
        ></input>
        {htmlInputProps.type === InputType.Password ? (
          <div className={styles.iconContainer} onClick={toggleVisibility}>
            {visible ? <HideIcon /> : <ShowIcon />}
          </div>
        ) : undefined}
      </div>
    </div>
  );
}
