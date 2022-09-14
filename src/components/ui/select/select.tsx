import styles from "./select.module.css";
import commonStyles from "../common/common.module.css";
import uniqueId from "lodash/uniqueId";
import { useState } from "react";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export function Select({ label, ...htmlSelectProps }: SelectProps) {
  const [inputId] = useState(uniqueId("select-"));

  return (
    <div className={commonStyles.fieldContainer}>
      {label ? (
        <label className={commonStyles.label} htmlFor={inputId}>
          {label}
        </label>
      ) : undefined}
    </div>
  );
}
