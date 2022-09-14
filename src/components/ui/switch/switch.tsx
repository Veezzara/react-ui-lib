import styles from "./switch.module.css";
import commonStyles from "../common/common.module.css";
import classnames from "classnames";
import uniqueId from "lodash/uniqueId";
import { useState } from "react";

export interface SwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  on: string;
  off: string;
}

export function Switch({ label, on, off, ...htmlCheckBoxProps }: SwitchProps) {
  const [inputId] = useState(uniqueId("checkbox-"));
  const [checked, setChecked] = useState<boolean>(false);

  function toggle() {
    setChecked((prevValue) => !prevValue);
  }

  const labelClasses = classnames(commonStyles.label, styles.label);

  const switchContainerClasses = classnames(styles.switchContainer, {
    [styles.switchContainerChecked]: checked,
  });

  const switchCircleClasses = classnames(styles.switchCircle, {
    [styles.switchCircleChecked]: checked,
  });

  return (
    <div>
      {label ? (
        <label htmlFor={inputId} className={labelClasses}>
          <div className={switchContainerClasses}>
            <div className={styles.switchOnLabel}>{on}</div>
            <div className={styles.switchOffLabel}>{off}</div>
            <div className={switchCircleClasses}></div>
          </div>
          {label}
        </label>
      ) : undefined}
      <input
        {...htmlCheckBoxProps}
        id={inputId}
        className={styles.checkbox}
        checked={checked}
        onChange={toggle}
        type={"checkbox"}
      ></input>
    </div>
  );
}
