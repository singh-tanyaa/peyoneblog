
"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "@/app/styles/form.module.css";

const Register = () => {
  const [isLogin, setIsLogin] = useState(false); // Add state for login
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  // Define validation schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone Number must be 10 digits")
      .required("Phone number is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    role: Yup.string().required("Role is required"),
    education: Yup.string().required("Education is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      role: "",
      education: "",
    },
    validationSchema: isLogin
      ? Yup.object({
          email: validationSchema.fields.email,
          password: validationSchema.fields.password,
        })
      : validationSchema,
    onSubmit: async (values) => {
      if (isLogin) {
        await handleLogin(values);
      } else {
        await handleRegister(values);
      }
    },
  });

  const handleRegister = async (data) => {
    try {
      const response = await axios.post(
        "https://localhost:4000/api/v1/user/register",
        data
      );
      formik.resetForm();
      setMessage(response.data.message);
      setMessageType("success");
    } catch (error) {
      setMessage(error.response.data.message);
      setMessageType("error");
    }
  };

  const handleLogin = async (data) => {
    try {
      const response = await axios.post(
        "https://localhost:4000/api/v1/user/login",
        data
      );
      setMessage(response.data.message);
      setMessageType("success");
    } catch (error) {
      setMessage(error.response.data.message);
      setMessageType("error");
    }
  };

  return (
    <section className={styles.authForm}>
      <form onSubmit={formik.handleSubmit}>
        <h1 className={styles.authFormHeading}>
          {isLogin ? "LOGIN" : "REGISTER"}
        </h1>
        {message && (
          <p
            className={
              messageType === "success"
                ? styles.successMessage
                : styles.errorMessage
            }
          >
            {message}
          </p>
        )}
        {!isLogin && (
          <>
            <select
              name="role"
              className={styles.authFormSelect}
              value={formik.values.role}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">SELECT ROLE</option>
              <option value="Admin">ADMIN</option>
              <option value="Author">AUTHOR</option>
              <option value="Reader">READER</option>
              <option value="Writer">WRITER</option>
            </select>
            {formik.touched.role && formik.errors.role ? (
              <div className={styles.error}>{formik.errors.role}</div>
            ) : null}

            <div>
              <input
                name="name"
                className={styles.authFormInput}
                type="text"
                placeholder="Your Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className={styles.error}>{formik.errors.name}</div>
              ) : null}
            </div>
            <div>
              <input
                name="phone"
                className={styles.authFormInput}
                type="number"
                placeholder="Phone Number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className={styles.error}>{formik.errors.phone}</div>
              ) : null}
            </div>
            <select
              name="education"
              className={styles.authFormSelect}
              value={formik.values.education}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">SELECT YOUR EDUCATION</option>
              <option value="Matric">Matric</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Graduation">Graduation</option>
              <option value="Masters">Masters</option>
              <option value="PhD">PhD</option>
            </select>
            {formik.touched.education && formik.errors.education ? (
              <div className={styles.error}>{formik.errors.education}</div>
            ) : null}
          </>
        )}
        <div>
          <input
            name="email"
            className={styles.authFormInput}
            type="email"
            placeholder="Your Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={styles.error}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <input
            name="password"
            className={styles.authFormInput}
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className={styles.error}>{formik.errors.password}</div>
          ) : null}
        </div>
        <p className={styles.authFormLink}>
          {isLogin ? "New User?" : "Already Registered?"}{" "}
          <Link href="#" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register Now" : "Login Now"}
          </Link>
        </p>
        <button className={styles.submitBtn} type="submit">
          {isLogin ? "LOGIN" : "REGISTER"}
        </button>
        <button
          className={styles.secondaryBtn}
          type="button"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Register Instead" : "Login Instead"}
        </button>
      </form>
    </section>
  );
};

export default Register;
