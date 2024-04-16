
import React, { useState, useEffect } from "react";
import { getPetsFromOwnerId, deletePetById } from '../../services/PetService.js';

const ViewPets = () => {
    
    const [pets, updatePets] = useState([]);

    useEffect(() => {
        (async () => {
            const pets = await getPetsFromOwnerId();
            console.log(pets);
            updatePets(pets);
        })();
    }, []);

    const deletePet = async (pet) => {
        console.log(pet);
        const petId = pet.id.value;
        const response = await deletePetById(petId);
        console.log(response);
        if(response.statusCode === 201) {
            updatePets(pets.filter(pet => pet.id.value !== petId));
        }
    }

    return (
        <div className='container flex flex-col items-center mt-6'>
            {pets.map(pet => {
                return (
                    <div key={pet.id.value} className='mb-4 border-solid border-2'>
                        <div>Id: {pet.id.value}</div>
                        <div>Name: {pet.name}</div>
                        <div>Species: {pet.species}</div>
                        <div>Birth date: {pet.birthDate}</div> 
                        <button 
                        className='border-solid border-2'
                        onClick={() => deletePet(pet)}
                        >Delete</button>
                    </div>
                );
            })}
        </div>
    )
}

export default ViewPets;
