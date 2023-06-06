import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useSignupStore from "../../stores/signup-store";

const userSchema = z
  .object({
    name: z.string().min(1, { message: "Please provide a name" }),
    email: z.string().email(),
    password: z
      .string()
      .min(2, { message: "Need more characters for the password" }),
    confirmPassword: z
      .string()
      .min(2, { message: "Need more characters for the password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function UserField() {
  const [show, setShow] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  console.log(errors);

  const addValues = useSignupStore((state) => state.addValues);
  const togglePass = () => setShow(!show);

  const navigate = useNavigate();

  const handleUserSubmit = (values) => {
    addValues(values);
    navigate("/auth/signup/business");
  };

  return (
    <div className="userField container">
      <h2>Stay organized. Stay (insert name).</h2>
      <form
        onSubmit={handleSubmit(handleUserSubmit)}
        className="signUp needs-validation my-3"
        noValidate
      >
        <div className="formInput mb-2">
          <label htmlFor="name" className="form-label">
            Full name
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Enter full name"
            {...register("name", { required: true })}
          />
          {errors && errors.name && (
            <div className="invalid-feedback response">
              {errors.name.message}
            </div>
          )}
        </div>

        <div className="formInput mb-2">
          <label htmlFor="email" className="form-label">
            Enter email
          </label>
          <input
            type="email"
            className="form-control form-control-sm"
            id="email"
            placeholder="Please enter your email"
            {...register("email", { required: true })}
          />
          <div className="invalid-feedback response">Invalid email!</div>
        </div>

        <div className="formInput mb-2">
          <label htmlFor="password" className="form-label">
            Create password
          </label>
          <div className="input-group input-group-sm">
            <input
              type={show ? "text" : "password"}
              className="form-control"
              placeholder="Create your password"
              {...register("password", { required: true })}
            />
            <div className="invalid-feedback invalidPass">
              This field can not be left blank.
            </div>
            <button
              type="button"
              onClick={togglePass}
              className="btn btn-secondary input-group-text"
            >
              {show ? (
                <i className="bi bi-eye-slash"></i>
              ) : (
                <i className="bi bi-eye"></i>
              )}
            </button>
          </div>
        </div>

        <div className="formInput mb-2">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm password
          </label>
          <div className="input-group input-group-sm mb-4">
            <input
              type={show ? "text" : "password"}
              className="form-control"
              placeholder="Create your password"
              {...register("confirmPassword", { required: true })}
            />
            <div className="invalid-feedback invalidPass">
              Password does not match.
            </div>
            <button
              type="button"
              onClick={togglePass}
              className="btn btn-secondary input-group-text"
            >
              {show ? (
                <i className="bi bi-eye-slash"></i>
              ) : (
                <i className="bi bi-eye"></i>
              )}
            </button>
          </div>
        </div>

        <button type="submit" className="btn btn-dark">
          Create account
        </button>
      </form>
    </div>
  );
}
