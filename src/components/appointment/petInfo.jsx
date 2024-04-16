import React, { useState } from "react";
import Button from "../Button";
import ViewPets from '../pet/viewPets.jsx';
import { createPet } from '../../services/PetService.js';

const Login = () => {
    
    const [form, updateForm] = useState({
        name: "",
        species: "",
        birthDate: ""
    });

    const submitPet = async (e) => {
        e.preventDefault();
        console.log(form);
        const response = await createPet(form);
        console.log(response);
    }

    const onChange = async (e) => {
        const value = e.target.value;
        const field = e.target.id;
        updateForm({...form, [field]: value});
    }

    return (
        <div className="w-full h-screen pt-16 bg-slate-50">
            <h1 className="text-3xl font-semibol text-center text-black">Add Pet</h1>
            <form className="mt-6" onSubmit={submitPet} >
                <div className="mb-2">
                    <label className="block text-sm font-semibold text-center text-black">Name:</label>
                    <div className="flex justify-center">
                        <input onChange={onChange} type="text" id="name" placeholder="Pet Name" className="block w-64 px-4 py-2 mt-2 text-black bg-white border-2 border-black rounded-xl focus:border-slate-400 focus:ring-purple-300 focus:outline-none " required />
                        </div>
                </div>
                 <div className="mb-2">
                    <label className="block text-sm font-semibold text-center text-black">Species:</label>
                    <div className="flex justify-center">
                        <input onChange={onChange} type="text" id="species" placeholder="Species" className="block w-64 px-4 py-2 mt-2 text-black bg-white border-2 border-black rounded-xl focus:border-slate-400 focus:ring-purple-300 focus:outline-none " required />
                        </div>
                </div>
				 <div className="mb-2">
                    <label className="block text-sm font-semibold text-center text-black">Birth Date:</label>
                    <div className="flex justify-center">
                        <input onChange={onChange} type="date" id="birthDate" placeholder="Birth Date" className="block w-64 px-4 py-2 mt-2 text-black bg-white border-2 border-black rounded-xl focus:border-slate-400 focus:ring-purple-300 focus:outline-none " required />
                        </div>
                </div>
				
                        <div className="mt-6 flex justify-center ">
          <Button type="submit" variant="success">
            Submit
          </Button>
        </div>
            </form> 
           <ViewPets /> 
        </div>
    );
};

export default Login;
