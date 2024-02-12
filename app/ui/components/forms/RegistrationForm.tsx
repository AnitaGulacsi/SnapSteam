"use client";
import { useState } from "react";
import { Button } from "../buttons/button";

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/lib/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("User registered successfully!");
      } else {
        console.error("Failed to register user");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <form className="p-10" onSubmit={handleSubmit}>
      <div className="flex justify-center">
        <input
          className="p-2 w-64 rounded-full border border-teal-400 bg-transparent outline-none focus:outline-none"
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex justify-center">
        <input
          className="p-2 mt-5 w-64 rounded-full border border-teal-400 bg-transparent outline-none focus:outline-none"
          type="text"
          placeholder="E-mail"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex justify-center">
        <input
          className="p-2 mt-5 w-64 rounded-full border border-teal-400 bg-transparent outline-none focus:outline-none"
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex justify-center">
        <input
          className="p-2 mt-5 w-64 rounded-full border border-teal-400 bg-transparent outline-none focus:outline-none"
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
      </div>
      <span className="flex justify-center mt-10">
        <Button type="form">SignIn</Button>
      </span>
      {/* <div className="mt-5 flex flex-col gap-5">
        <div className="flex justify-center">
          <Button type="social">Sign In Whit Facebook</Button>
        </div>
        <div className="flex justify-center">
          <Button type="social">Sign In With Instagram</Button>
        </div>
        <div className="flex justify-center">
          <Button type="social">Sign In With Google</Button>
        </div>
      </div> */}
    </form>
  );
};
