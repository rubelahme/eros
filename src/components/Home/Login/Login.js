import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));
  return (
    <>
      <div className="Login mb-5">
        <h6 className="login-account">Log Into Account</h6>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control mb-4 p-3"
            placeholder="E-mail Address"
            {...register("example", { required: true })}
          />
          {errors.example && (
            <p className="error">
              Invalid email address. Example john@doe.com.
            </p>
          )}
          <input
            className="form-control mb-4 p-3"
            placeholder="Password"
            {...register("exampleRequired", { required: true })}
          />

          <div className="d-flex justify-content-between">
            <div>
              <input
                class="form-check-input btn-check-warning"
                type="checkbox"
                value="btn-check-warning"
                id="flexCheckDefault"
              />
              <label class="Remember ps-2" for="flexCheckDefault">
                Remember me
              </label>
            </div>
            <div>
              <p className="forgot">Forgot Password</p>
            </div>
          </div>
          {errors.exampleRequired && (
            <p className="error">
              You have entered an invalid username or password
            </p>
          )}
          <input
            className="form-control log"
            type="submit"
            value="LOG INTO MY ACCOUNT"
          />
          <input
            className="form-control Create-log"
            value="Create New Account"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
