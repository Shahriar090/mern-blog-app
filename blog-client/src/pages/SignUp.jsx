import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex flex-col md:flex-row md:items-center gap-5 p-3 max-w-3xl mx-auto">
        {/* left */}
        <div className="logo flex-1">
          <Link to="/" className="text-2xl font-bold dark:text-white">
            <span className="px-3 py-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Shahriar's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5 ">
            Sign up now to join a diverse network of passionate writers and
            readers
          </p>
        </div>
        {/* right */}
        <div className="sign-up-form flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="User Name" />
              <TextInput type="text" placeholder="User Name" id="userName" />
            </div>
            <div>
              <Label value="Email" />
              <TextInput type="email" placeholder="User Email" id="email" />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="Your Password"
                id="password"
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>

          <div className="flex items-center gap-3 mt-5 text-sm">
            <span>Already Have An Account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
