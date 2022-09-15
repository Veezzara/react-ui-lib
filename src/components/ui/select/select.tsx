import styles from "./select.module.css";
import commonStyles from "../common/common.module.css";
import uniqueId from "lodash/uniqueId";
import { useState } from "react";
import classNames from "classnames";

export interface SelectOption {
  name: string;
  value: string;
}

export interface SelectProps {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
}

export function Select(props: SelectProps) {
  const [inputId] = useState(uniqueId("select-"));
  const [open, setOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<SelectOption>();

  function toggleOpen() {
    setOpen((prevValue) => !prevValue);
  }

  const listContainerClasses = classNames(styles.selectListContainer, {
    [styles.hidden]: !open,
  });

  return (
    <div className={commonStyles.fieldContainer}>
      {props.label ? (
        <label className={commonStyles.label} htmlFor={inputId}>
          {props.label}
        </label>
      ) : undefined}
      <div>
        <div className={commonStyles.field} onClick={toggleOpen}></div>
        <div className={listContainerClasses}>
          <ol>
            {props.options.map((option, index) => {
              return <li key={index}>option.name</li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
