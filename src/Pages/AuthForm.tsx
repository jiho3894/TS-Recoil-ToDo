import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import TextField from "@mui/material/TextField";

type Inputs = {
  Email: string;
  Password: string;
  Password2: string;
  NickName?: string;
};

const Form = styled.form`
  margin: auto 0;
  width: 500px;
  height: 300px;
  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.div`
  width: 90%;
  height: 40px;
  margin: 10px 0;
  display: flex;
`;

const Span = styled.span`
  color: black;
  line-height: 60px;
`;

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.Password !== data.Password2) {
      setError("Password", { message: "not same" }, { shouldFocus: true });
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputBox>
        <TextField
          label="Email"
          variant="standard"
          placeholder="Email"
          autoFocus
          {...register("Email", {
            required: "put email",
            pattern: {
              value: /^[A-Za-z0-9._%+-]/g,
              message: "email pattern",
            },
          })}
        />
        <Span>{errors?.Email?.message}</Span>
      </InputBox>
      <InputBox>
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          variant="standard"
          autoComplete="off"
          {...register("Password", {
            required: true,
            pattern: {
              value: /^[A-Za-z0-9._%+-]/g,
              message: "not pattern",
            },
          })}
        />
        <Span>{errors?.Password?.message}</Span>
      </InputBox>
      <InputBox>
        <TextField
          id="standard-password-input"
          label="Try Password"
          type="password"
          variant="standard"
          autoComplete="off"
          {...register("Password2", {
            required: true,
            pattern: {
              value: /^[A-Za-z0-9._%+-]/g,
              message: "error",
            },
          })}
        />
        <Span>{errors?.Password2?.message}</Span>
      </InputBox>
      <InputBox>
        <TextField
          id="standard-basic"
          label="NickName"
          variant="standard"
          {...register("NickName", {
            required: true,
            minLength: {
              value: 3,
              message: "minLength 3",
            },
            pattern: {
              value: /^[A-Za-z0-9._%+-]/g,
              message: "pattern error",
            },
            validate: (value) =>
              value?.includes("Jiho") ? "allow Jiho" : true,
          })}
        />
        <Span>{errors?.NickName?.message}</Span>
      </InputBox>
      <input type="submit" value="보내" />
    </Form>
  );
};
export default AuthForm;
