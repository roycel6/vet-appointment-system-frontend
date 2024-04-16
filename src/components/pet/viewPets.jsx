
import React, { useState, useEffect } from "react";
import { getPetsFromOwnerId } from '../../services/PetService.js';

const ViewPets = () => {
    
    const [pets, updatePets] = useState([]);

    useEffect(() => {
        (async () => {
            const pets = await getPetsFromOwnerId();
            console.log(pets);
            updatePets(pets);
        })();
    }, [])

    return (
        <div class='container flex flex-col items-center mt-6'>
            {pets.map(pet => {
                return (
                    <div key={pet.id.value} class='mb-4 border-solid border-2'>
                        <div>Id: {pet.id.value}</div>
                        <div>Name: {pet.name}</div>
                        <div>Species: {pet.species}</div>
                        <div>Birth date: {pet.birthDate}</div> 
                    </div>
                );
            })}
        </div>
    )
}

export default ViewPets;
