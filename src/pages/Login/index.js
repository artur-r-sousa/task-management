import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USER_CREATE_LOGIN_REQUEST, USER_LOGIN_REQUEST } from "../../app/modules/login/actions";

function Login() {

  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    user_email: "",
    user_password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData)
    dispatch(
      isLogin ? USER_LOGIN_REQUEST(formData):
      USER_CREATE_LOGIN_REQUEST(formData)
    )
  };

  const teste = useSelector((state) => state)
  console.log(teste)

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user_email">Email:</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="user_password">Password:</label>
          <input
            type="password"
            id="user_password"
            name="user_password"
            value={formData.user_password}
            onChange={handleChange}
            required
          />
        </div>
        <button onClick={() => setIsLogin(!isLogin)}> {isLogin ? 'Login' : 'Create new'}</button>
        <button type="submit">Submit</button>
        
      </form>
    </div>
  );
}

export default Login;