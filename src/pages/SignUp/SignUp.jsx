import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { js } from "@eslint/js";
import { AuthContext } from "../../context/UserContext";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser, updataUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUserRegistrarion = (data) => {
    console.log(data);
    createUser(data?.email, data?.password)
      .then((result) => {
        const user = result.user;
        const updatting = {
          displayName: data?.name,
        };
        updataUser(updatting);
        saveUser(data.name,data.email)

        toast.success("Successfully User Created 🥰");
      })
      .then((err) => {
        console.log(err);
      });
  };

  const saveUser = (name,email) => {
    const user ={name:name,email:email}
    //fetch("/") user post hobe

  }

  return (
    <div className="mx-auto card shadow-2xl my-5 mt-10 w-96">
      <div className="card-body">
        <form
          onSubmit={handleSubmit(handleUserRegistrarion)}
          className="fieldset"
        >
          {/* Name */}
          <div className="mt-2">
            <label className="label">Name</label>
            <input
              className="input w-full"
              {...register("name", {
                required: "Name is required",
              })}
              placeholder="type your name"
              type="text"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mt-2">
            <label className="label">Email</label>
            <input
              className="input w-full"
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
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
                minLength: {
                  value: 6,
                  message: "password should be six characters",
                },

                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message: "password should be a special characters",
                },
              })}
              placeholder="type your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <p className="text-primary label">
            Already have an Account?{" "}
            <Link className="underline" to="/sign-in">
              Login Please
            </Link>
          </p>

          <div className="mt-2">
            <input
              type="submit"
              className="input w-full bg-primary text-white cursor-pointer"
            />
          </div>
        </form>

        <div className="grid grid-cols-2 gap-3 mt-3">
          <button className="input w-full bg-primary text-white cursor-pointer">
            Continue with Google
          </button>
          <button className="input w-full bg-primary text-white cursor-pointer">
            Continue with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
