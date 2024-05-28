import React from 'react';
import styles from "@/app/styles/form.module.css";
import Register from '../register/Register';
import loginstyles from "./login.module.css";

const Login = () => {
  return (
    <div className={loginstyles.container}>
      
      <Register />
    </div>
  );
}

export default Login;


