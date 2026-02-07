import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { js } from '@eslint/js';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUserLogin = (data) => {
    console.log(data);
  };

  return (
    <div className="mx-auto card shadow-2xl my-5 mt-10 w-96">
      <div className="card-body">
        <form
          onSubmit={handleSubmit(handleUserLogin)}
          className="fieldset"
        >
          

          {/* Email */}
          <div className="mt-2">
            <label className="label">Email</label>
            <input
              className="input w-full"
              type="email"
              {...register("email", {
                required: "Email is required",
              },
              
            )}
              placeholder="type your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          
          {/* Password */}
          <div className="mt-2">
            <label className="label">Password</label>
            <input
              className="input w-full"
              type="password"
              {...register("password", {
                required: "Password is required",
                }
          )}
              placeholder="type your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <p className="text-primary label">
            New to Website?{" "}
            <Link className="underline" to="/sign-up">
              Register Please
            </Link>
          </p>

          <div className="mt-2">
            <input
              type="submit"
              className="input w-full bg-primary text-white"
            />
          </div>
        </form>

        <div className="grid grid-cols-2 gap-3 mt-3">
          <button className="input w-full bg-primary text-white">
            Continue with Google
          </button>
          <button className="input w-full bg-primary text-white">
            Continue with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
