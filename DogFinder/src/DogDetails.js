import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./DogDetails.css"

/**
 * Component DogDetails renders information about dog
 * props: dog: {name, src, age, facts: []}
 */

const DogDetails = ({dog}) => {
    // if no prop, immediately redirects to home page
    if (!dog) return <Navigate to="/" />

    return(
        <div className="Dog">
            <img className= "Dog-img" src={`/${dog.src}.jpg`} alt={dog.name}/>
            <h1>{dog.name}</h1>
            <div className="Dog-info">
                <p><b>Age:</b> {dog.age} years old</p>
                <p><b>Fun Facts:</b></p>
                <ul className="Dog-facts">
                    {dog.facts.map((fact, i) => (
                        <li key={i}>{fact}</li>
                    ))}
                </ul>
            </div>
            <Link className="return-link" to="/dogs">Return</Link>
        </div>
    )
}

export default DogDetails;