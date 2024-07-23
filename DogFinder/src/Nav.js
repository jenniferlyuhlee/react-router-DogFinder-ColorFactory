import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

/**
 * NavBar component that displays links to dog's detail pages
 * props: dogs:[(age, name, src, facts:[])]
 */
const Nav = ({dogs}) => {
    return(
        <nav className="Nav">
            <Link className="Nav-link" to="/dogs">
                Home
            </Link>
            {dogs.map(dog => (
                <Link className="Nav-link" 
                      key={dog.name} 
                      to={`/dogs/${dog.src}`}>
                    {dog.name}
                </Link>
            ))}
        </nav>
    )
}

export default Nav;