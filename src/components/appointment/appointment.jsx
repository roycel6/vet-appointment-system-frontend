import React from "react";
import Button from "../Button";

const Login = () => {
    return (
        <div className="w-full h-screen pt-16 bg-slate-50">
            <h1 className="text-3xl font-semibol text-center text-black">Make an Appointment</h1>
            <form className="mt-6">
                <div className="mb-2">
                    <label className="block text-sm font-semibold text-center text-black">Pet Name:</label>
                    <div className="flex justify-center">
                        <input type="text" id="petName" placeholder="Pet Name" 
                        className="block w-64 px-4 py-2 mt-2 text-black bg-white border-2 border-black rounded-xl focus:border-slate-400 focus:ring-purple-300 focus:outline-none " required />
                        </div>
                </div>
                 <div className="mb-2">
                    <label className="block text-sm font-semibold text-center text-black">Reason for Appointment:</label>
                    <div className="flex justify-center">
                        <textarea id="description" rows = {8} placeholder="Reason for Appointment" 
                        className="block w-64 px-4 py-2 mt-2 text-black bg-white border-2 border-black rounded-xl focus:border-slate-400 focus:ring-purple-300 focus:outline-none " required />
                        </div>
                </div>
				 <div className="mb-2">
                    <label className="block text-sm font-semibold text-center text-black">Date:</label>
                    <div className="flex justify-center">
                        <input type="date" id="date" placeholder="Date" 
                        className="block w-64 px-4 py-2 mt-2 text-black bg-white border-2 border-black rounded-xl focus:border-slate-400 focus:ring-purple-300 focus:outline-none " required />
                        </div>
                </div>
				 <div className="mb-2">
                    <label className="block text-sm font-semibold text-center text-black">Time:</label>
                    <div className="flex justify-center">
                        <input type="time" id="time" placeholder="Time" 
                        className="block w-64 px-4 py-2 mt-2 text-black bg-white border-2 border-black rounded-xl focus:border-slate-400 focus:ring-purple-300 focus:outline-none " required />
                        </div>
                </div>
                        <div className="mt-6 flex justify-center ">
          <Button type="submit" variant="success">
            Submit
          </Button>
        </div>
            </form> 
        </div>
    );
};

export default Login;