import React from "react";
import { Button } from "../button/button";
import { InputProps } from "../input/input";
import styles from "./form.module.css";

type FieldProps = InputProps

export interface SubmitProps {
  onSubmit: <T>(formData: T) => void;
  submitLabel: string;
}

export interface SecondaryActionProps {
  onSecondaryAction: () => void;
  secandaryActionLabel: string;
}

export interface FormFieldData<TProps> {
  field: (props: TProps) => JSX.Element;
  props: TProps;
}

export interface FormProps {
  fieldsData: FormFieldData<FieldProps>[];
  submitProps: SubmitProps;
  secondaryActionProps?: SecondaryActionProps;
}

export function Form(props: FormProps): JSX.Element {
  function onFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <form onSubmit={onFormSubmit}>
      {props.fieldsData.map((fieldData, index) => {
        const field = fieldData.field(fieldData.props);
        return <div key={index}>{field}</div>;
      })}
      <Button text={props.submitProps.submitLabel}></Button>
    </form>
  );
}
