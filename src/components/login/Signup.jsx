import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../Button";
import { registerAccount } from '../../services/AccountService.js';

const Signup = () => {

  const navigate = useNavigate();

  const [form, updateForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const onChange = async (e) => {
    const value = e.target.value;
    const field = e.target.id;
    updateForm({...form, [field]: value});
  }

  const register = async (e) => {
    e.preventDefault();
    console.log(form);
    if(form.password.localeCompare(form.confirmPassword) !== 0) {
        window.alert("Passwords do not match!");
        return;
    }
    const response = await registerAccount(form);
    console.log(response);
    window.alert(response.message);
    if(response.statusCode === 201) {
        navigate('/login');
    }
  }

  return (
    <div className="w-full h-lvh pt-12 bg-slate-50">
      <h1 className="text-3xl font-semibol text-center text-black">Sign Up</h1>
      <form onSubmit={(e) => register(e)} className="mt-6">
	   <div className="mb-2">
          <label className="block text-sm font-semibold text-center text-black">
            First Name:
          </label>
          <div className="flex justify-center">
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="block w-64 px-4 py-2 mt-2 text-black bg-white border-2 border-black rounded-xl focus:border-purple-400 focus:ring-purple-300 focus:outline-none "
              required
              onChange={onChange}
            />
          </div>
        </div>
		 <div className="mb-2">
          <label className="block text-sm font-semibold text-center text-black">
            Last Name:
          </label>
          <div className="flex justify-center">
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="block w-64 px-4 py-2 mt-2 text-black bg-white border-2 border-black rounded-xl focus:border-purple-400 focus:ring-purple-300 focus:outline-none "
              required
              onChange={onChange}
            />
          </div>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-semibold text-center text-black">
            Email:
          </label>
          <div className="flex justify-center">
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="block w-64 px-4 py-2 mt-2 text-black bg-white border-2 border-black rounded-xl focus:border-purple-400 focus:ring-purple-300 focus:outline-none "
              required
              onChange={onChange}
            />
          </div>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-semibold text-center text-black">
            Password:
          </label>
          <div className="flex justify-center">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="block w-64 px-4 py-2 mt-2 text-black bg-white border-2 border-black rounded-xl focus:border-purple-400 focus:ring-purple-300 focus:outline-none "
              required
              onChange={onChange}
            />
          </div>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-semibold text-center text-black">
            Confirm Password:
          </label>
          <div className="flex justify-center">
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="block w-64 px-4 py-2 mt-2 text-black bg-white border-2 border-black rounded-xl focus:border-purple-400 focus:ring-purple-300 focus:outline-none "
              required
              onChange={onChange}
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center ">
          <Button type="submit" variant="success">
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
