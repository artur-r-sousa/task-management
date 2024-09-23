import React, { useState } from "react";
import { Container, LoginContainer } from "./styles";
import FormComponent from "../../components/FormComponent";
import { useDispatch } from "react-redux";
import { USER_CREATE_LOGIN_REQUEST, USER_LOGIN_REQUEST } from "../../app/modules/login/actions";

export default function Login() {

  const [isNewLogin, setIsNewLogin] = useState(false)

  const dispatch = useDispatch();

  const fields = [    
    { 
      label: 'E-mail', 
      type: 'email', 
      name: 'user_email',
      placeholder: 'Enter your e-mail', 
      required: true 
    },
    { 
      label: 'Password', 
      type: 'password', 
      name: 'user_password',
      placeholder: '', 
      required: true 
    }
  ]
  const optionalFields = {
    fields: [
      { 
        label: 'First Name',
        type: 'text', 
        name: 'user_first_name', 
        placeholder: 'Enter your name', 
        required: true 
      },
      { 
        label: 'Last Name',
        type: 'text', 
        name: 'user_last_name', 
        placeholder: 'Enter your name', 
        required: true 
      }

    ],
    conditional: isNewLogin,
    setConditional: setIsNewLogin,
    conditionalLabelOptions: ['Login', 'Create New']
  }

  const onSubmit = (formData) => {
    const { user_email, user_password, user_first_name, user_last_name } = formData;

    if (!user_email || !user_password) {
      alert("Email and password are required.");
      return;
    }

    if (isNewLogin && (!user_first_name || !user_last_name)) {
      alert("First name and last name are required for new user registration.");
      return;
    }

    const payload = {
      user_email: user_email,
      user_password: user_password,
      ...(isNewLogin && { firstName: user_first_name, lastName: user_last_name })
    };

    isNewLogin ? 
      dispatch(USER_CREATE_LOGIN_REQUEST(payload)) : 
      dispatch(USER_LOGIN_REQUEST(payload));
  };

  return (
    <Container>
      <h1>Login Page</h1>
      <LoginContainer>
        <FormComponent 
          fields={fields} 
          onSubmit={onSubmit} 
          optionalFields={optionalFields}
        
        />
      </LoginContainer>
    </Container>
  );
}
