import React, { useState } from "react";
import Button from "../Button";
import { authenticateCredentials } from '../../services/AccountService.js'

const Login = () => {

    const [form, updateForm] = useState({
      email: "", password: ""  
    });

    const onChange = (e) => {
        const value = e.target.value;
        const field = e.target.placeholder.toLowerCase();
        updateForm({...form, [field]: value});
    }

    const login = async (e) => {
        e.preventDefault();
        const result = await authenticateCredentials(form); 
        console.log(result);
        window.alert(result.message);
        if(result.jwtToken !== '') {
            console.log('Authenticated successfully!');
            localStorage.setItem("token", result.jwtToken);
        }
    }

    return (
        <div className="w-full h-screen pt-16 bg-slate-50">
            <h1 className="text-3xl font-semibol text-center text-black">Log in</h1>
            <form onSubmit={(e) => login(e)} className="mt-6">
                <div className="mb-2">
                    <label className="block text-sm font-semibold text-center text-black">Email:</label>
                    <div className="flex justify-center">
                        <input type="text" id="name" placeholder="Email" onChange={onChange} className="block w-64 px-4 py-2 mt-2 text-black bg-white border-2 border-black rounded-xl focus:border-slate-400 focus:ring-purple-300 focus:outline-none " required />
                        </div>
                </div>
                 <div className="mb-2">
                    <label className="block text-sm font-semibold text-center text-black">Password:</label>
                    <div className="flex justify-center">
                        <input type="password" id="password" placeholder="Password" onChange={onChange} className="block w-64 px-4 py-2 mt-2 text-black bg-white border-2 border-black rounded-xl focus:border-slate-400 focus:ring-purple-300 focus:outline-none " required />
                        </div>
                </div>
                        <div className="mt-6 flex justify-center ">
          <Button type="submit" variant="success">
            Log In
          </Button>
        </div>
            </form> 
        </div>
    );
};

export default Login;
