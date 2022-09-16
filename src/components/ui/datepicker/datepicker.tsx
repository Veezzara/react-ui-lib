import styles from "./datepicker.module.css";
import commonStyles from "../common/common.module.css";
import uniqueId from "lodash/uniqueId";
import { useState } from "react";
import classNames from "classnames";
import "moment/locale/ru";
import moment from "moment";
import times from "lodash/times";
import { Button } from "../button/button";

export interface DatepickerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Datepicker({ label, ...inputHtmlProps }: DatepickerProps) {
  const [inputId] = useState(uniqueId("input-"));
  const [open, setOpen] = useState<boolean>(true);
  const [currentMonth, setCurrentMonth] = useState(moment());
  const [value, setValue] = useState("");

  function toggleOpen() {
    setOpen((prevValue) => !prevValue);
  }

  function getFirstDay() {
    return currentMonth.startOf("month").isoWeekday();
  }

  function getDaysInMonth() {
    return currentMonth.daysInMonth();
  }

  

  const containerStyles = classNames(
    commonStyles.fieldContainer,
    styles.container
  );

  const pickerClasses = classNames(styles.pickerContainer, {
    [styles.hidden]: !open,
  });

  return (
    <div className={containerStyles}>
      {label ? (
        <label className={commonStyles.label} htmlFor={inputId}>
          {label}
        </label>
      ) : undefined}
      <div>
        <div className={commonStyles.field} onClick={toggleOpen}></div>
        <div className={pickerClasses}>
          <div className={styles.pickerHeader}>
            <div></div>
            <div className={styles.pickerHeaderDate}>
              {currentMonth.format("MMMM YYYY")}
            </div>
            <div></div>
          </div>
          <div className={styles.pickerDatesContainer}>
            {times(getFirstDay() - 1, (i) => {
              return <div className={styles.pickerDateUnit} key={i}></div>;
            })}
            {times(getDaysInMonth(), (i) => {
              return (
                <div className={styles.pickerDateUnit} key={i}>
                  {i + 1}
                </div>
              );
            })}
          </div>
          <div className={styles.buttonContainer}>
            <Button text="Сегодня" />
          </div>
        </div>
      </div>
    </div>
  );
}
