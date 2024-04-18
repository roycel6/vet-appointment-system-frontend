import React, { useState, useEffect } from 'react';
import Button from "../components/Button.jsx";
import { getPetsFromOwnerId } from '../services/PetService.js';
import { updatePet } from '../services/PetService.js';

const PetUpdatePage = () => {

  const [pets, updatePets] = useState([]);
  const [form, updateForm] = useState({
        id: "",
        name: "",
        species: "",
        birthDate: ""
    });

    const submitPet = async (e) => {
        e.preventDefault();
        const petElement = document.querySelector('#petId');
        const petId = petElement.options[petElement.selectedIndex].value;
        form["id"] = petId;
        console.log(form);
        const response = await updatePet(form);
        console.log(response);
        if(response.statusCode === 201) {
            window.alert("Successfully updated pet!");
        }
    }

    useEffect(() => {
        (async () => {
            const pets = await getPetsFromOwnerId();
            console.log(pets);
            updatePets(pets);
        })();
    }, []);

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
                    <label className="block text-sm font-semibold text-center text-black">Pet id:</label>
                    <div className="flex justify-center">
                        <select name="petId" id="petId">
                            {pets.map(pet => {
                                return (<option value={pet.id.value} key={pet.id.value}>{pet.id.value}</option>)
                            })}
                        </select>
                    </div>
                </div>
                 <div className="mb-2">
                    <label className="block text-sm font-semibold text-center text-black">Name:</label>
                    <div className="flex justify-center">
                        <input onChange={onChange} type="text" id="name" placeholder="name" className="block w-64 px-4 py-2 mt-2 text-black bg-white border-2 border-black rounded-xl focus:border-slate-400 focus:ring-purple-300 focus:outline-none " required />
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
        </div>
    );

}

export default PetUpdatePage;
