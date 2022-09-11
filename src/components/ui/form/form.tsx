import { Input } from "../input/input";
import styles from "./form.module.css";

// export interface FormField {}

// export type FormResult = {
//   [key: string]: string;
// };

// export interface SubmitProps {
//   onSubmit: (formData: FormResult) => void;
//   submitLabel: string;
// }

// export interface CancelProps {
//   onCancel: () => void;
//   cancelLabel: string;
// }

// export type FormProps = {
//   header?: string;
//   fields: FormField[];
//   submitProps: SubmitProps;
//   cancelProps?: CancelProps;
// };

// export function Form(props: FormProps): JSX.Element {
//   return <form></form>;
// }

export interface FormFieldData {
  field: JSX.Element;
  validationFunction: (regex: RegExp) => boolean;
}

export interface FormProps {
  fieldsData: FormFieldData[];
}

const regex = /^[a-zA-Z]+$/;

export function Form(props: FormProps): JSX.Element {
  function onFormSubmit() {}

  return (
    <form onSubmit={onFormSubmit}>
      {props.fieldsData.map((fieldData, index) => {
        const field = fieldData.field;
        return <div key={index}>{field}</div>;
      })}
    </form>
  );
}
