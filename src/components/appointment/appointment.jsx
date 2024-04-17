import React, { useState, useEffect } from "react";
import Button from "../Button";
import { getPetsFromOwnerId } from '../../services/PetService.js';
import { createAppointment } from '../../services/AppointmentService.js';

const CreateAppointments = () => {

    const [form, updateForm] = useState({
        petId: "", description: "",
        appointmentStartDateTime: "",
        appointmentEndDateTime: ""
    });
    const [pets, updatePets] = useState([]);
    
    useEffect(() => {
        (async () => {
            const petsList = await getPetsFromOwnerId();
            console.log(petsList);
            updatePets(petsList);
        })();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        const petElement = document.querySelector('#petId');
        const petId = petElement.options[petElement.selectedIndex].value;
        const appointmentForm = {};
        appointmentForm['petId'] = petId;
        const description = document.querySelector('#description').value;
        appointmentForm['description'] = description;
        const date = document.querySelector('#date').value;
        const startTime = document.querySelector('#startTime').value;
        const endTime = document.querySelector('#endTime').value;
        appointmentForm['appointmentStartDateTime'] = date + "T" + startTime;
        appointmentForm['appointmentEndDateTime'] = date + "T" + endTime;

        console.log(appointmentForm);
        const response = await createAppointment(appointmentForm);
        console.log(response);
        if(response === null) {
            window.alert("An error has occurred! (Is the end time before the start time?)");
            return;
        }
        window.alert(response.message);
    }

    return (
        <div className="w-full h-screen pt-16 bg-slate-50">
            <h1 className="text-3xl font-semibol text-center text-black">Make an Appointment</h1>
            <form onSubmit={(e) => onSubmit(e)} className="mt-6">
                <div className="mb-2">
                    <label className="block text-sm font-semibold text-center text-black">Pet Name:</label>
                    <div className="flex justify-center">
                        <select name="petId" id="petId">
                            {pets.map(pet => {
                                return (<option value={pet.id.value} key={pet.id.value}>{pet.id.value}</option>)
                            })}
                        </select>
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
                    <label className="block text-sm font-semibold text-center text-black">Start time:</label>
                    <div className="flex justify-center">
                        <input type="time" id="startTime" placeholder="Time" 
                        className="block w-64 px-4 py-2 mt-2 text-black bg-white border-2 border-black rounded-xl focus:border-slate-400 focus:ring-purple-300 focus:outline-none " required />
                        </div>
                </div>
           <div className="mb-2">
                    <label className="block text-sm font-semibold text-center text-black">End time:</label>
                    <div className="flex justify-center">
                        <input type="time" id="endTime" placeholder="Time" 
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

export default CreateAppointments;
