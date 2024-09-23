import React from "react"
import { Button, ButtonRow, Form, FormInput, FormItemContainer, Label } from "./styles";

export default function FormComponent({
  fields,
  optionalFields = {
    fields: [],
    conditional: null,
    setConditional: null,
    conditionalLabelOptions: []
  },
  onSubmit
}) {

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    onSubmit(data)
  };

  return (
    <Form onSubmit={handleSubmit}>
      
      {fields.map((field, index) => {
        return (
          <FormItemContainer key={field.name + index}>
            <Label htmlFor={field.name}>{field.label}</Label>
            <FormInput
              type={field.type}
              id={`${field.type}_${field.name}`}
              name={field.name}
              required={field.required}
            />
          </FormItemContainer>
        )
      })}
      {optionalFields.conditional && (
        <>
          {optionalFields.fields.map((field, index) => {
            return (
              <FormItemContainer key={field.name + index}>
                <Label htmlFor={field.name}>{field.label}</Label>
                <FormInput
                  type={field.type}
                  id={`${field.type}_${field.name}`}
                  name={field.name}
                  required={field.required}
                />
              </FormItemContainer>
            )
          })}
        </>
      )}
      <ButtonRow>
        <Button onClick={() => optionalFields.setConditional(!optionalFields.conditional)}>
          {optionalFields.conditional ? optionalFields.conditionalLabelOptions[0] : optionalFields.conditionalLabelOptions[1]}
        </Button>
        <Button type="submit">Submit</Button>
      </ButtonRow>
    </Form>
  )
}