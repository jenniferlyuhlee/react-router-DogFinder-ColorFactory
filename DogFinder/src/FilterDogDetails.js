import React from "react";
import { useParams, Navigate } from "react-router-dom";
import DogDetails from "./DogDetails";

/**
 * Helper component that filters dogs data array and renders DogDetails page
 * props: dogs: [{name, age, src, facts: []}] 
 */

const FilterDogDetails = ({ dogs }) => {
    const { name } = useParams(); // extract name param from url
    if (name){
        const currentDog = dogs.find(
            dog => dog.name.toLowerCase() === name.toLowerCase()
        );
        return <DogDetails dog= {currentDog} />;
    }
    return null;
}

export default FilterDogDetails;