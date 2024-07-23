import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css"

/**
 * 
 */
const DogList = ({dogs}) => {
    return(
        <div>
            <h1>Dog Finder</h1>
            <p>We've got plenty of dogs! Click on the dogs to learn more.</p>
            <div className = "DogList">
                {dogs.map(dog => (
                    <div className="DogList-dog" key={dog.name}>
                        <h3>
                            <Link className="DogList-links" to={`/dogs/${dog.src}`}>{dog.name}</Link>
                        </h3>
                        <img className = "DogList-imgs" src={`/${dog.src}.jpg`} alt={dog.name}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DogList;