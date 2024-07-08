import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../shared/OAuth/OAuth";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // on change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.userName || !formData.email || !formData.password) {
      return setErrorMessage("Please fill all required field");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch(
        "https://blog-server-one-theta.vercel.app/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (data.success === true) {
        navigate("/sign-in");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

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
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="User Name" />
              <TextInput
                type="text"
                placeholder="User Name"
                id="userName"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="User Email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="Your Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                " Sign Up"
              )}
            </Button>
            <OAuth />
          </form>

          <div className="flex items-center gap-3 mt-5 text-sm">
            <span>Already Have An Account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
          {/* error message */}
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
