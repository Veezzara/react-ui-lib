import "./App.css";
import { Button, ButtonType } from "./components/ui/button/button";
import { Datepicker } from "./components/ui/datepicker/datepicker";
import { Divider } from "./components/ui/divider/divider";
import { Form } from "./components/ui/form/form";
import { Input, InputType } from "./components/ui/input/input";
import { Select } from "./components/ui/select/select";
import { Switch } from "./components/ui/switch/switch";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>UI Components</h1>
        <h2>Button</h2>
        <h3>Primary</h3>
        <Button />
        <Divider />
        <Button disabled />
        <h3>Secondary</h3>
        <Button buttonType={ButtonType.Secondary} />
        <Divider />
        <Button buttonType={ButtonType.Secondary} disabled />
        <h3>Danger</h3>
        <Button buttonType={ButtonType.Danger} />
        <Divider />
        <Button buttonType={ButtonType.Danger} disabled />
        <h2>Input</h2>
        <h3>Text Input</h3>
        <Input
          type={InputType.Text}
          label="User"
          placeholder="Enter username"
        />
        <h3>Password Input</h3>
        <Input
          label="Password"
          placeholder="Enter password"
          type={InputType.Password}
        />
        <h2>Switch</h2>
        <Switch label="Switch" on="В" off="О" name="Switch" />
        <h2>Datepicker</h2>
        <Datepicker label="Datepicker" />
        <h2>Select</h2>
        <Select
          label="Select"
          placeholder="Select option"
          options={[
            {
              name: "Option 1",
              value: "1",
            },
            {
              name: "Option 2",
              value: "2",
            },
            {
              name: "Option 3",
              value: "3",
            },
            {
              name: "Option 4",
              value: "4",
            },
          ]}
        />
        <h2>Form</h2>
        <Form
          fieldsData={[
            {
              field: Input,
              props: {
                type: InputType.Text,
                label: "User",
                placeholder: "Enter username",
              },
            },
          ]}
          submitProps={{
            submitLabel: "Submit",
            onSubmit: (body: any) => {},
          }}
        ></Form>
        <h2>TODO Components</h2>
        <ul>
          <li>Select</li>
          <li>PIN</li>
          <li>Modal</li>
        </ul>
        <h2>TODO Common</h2>
        <ul>
          <li>Validation</li>
          <li>Masks</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
