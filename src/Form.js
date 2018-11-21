import React, { Component } from "react";
import { Form as FinalForm, Field } from "react-final-form";

class Form extends Component {
  sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  onSubmit = async values => {
    await this.sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  };

  required = value => (value ? undefined : "required");
  render() {
    return (
      <div>
        <FinalForm onSubmit={this.onSubmit}>
          {({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit}>
              <label>First Name</label> <br />
              <Field
                name="FirstName"
                placeholder="First Name"
                validate={this.required}
              >
                {({ input, meta, placeholder }) => (
                  <>
                    <input
                      className={meta.touched && meta.error ? "red" : ""}
                      {...input}
                      placeholder={placeholder}
                    />
                    <br />
                  </>
                )}
              </Field>
              <Field
                name="Last Name"
                placeholder="Last Name"
                validate={this.required}
              >
                {({ input, meta, placeholder }) => (
                  <>
                    <input
                      className={meta.touched && meta.error ? "red" : ""}
                      {...input}
                      placeholder={placeholder}
                    />
                    <br />
                  </>
                )}
              </Field>
              <br />
              <button type="submit">Submit</button>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </form>
          )}
        </FinalForm>
      </div>
    );
  }
}

export default Form;
