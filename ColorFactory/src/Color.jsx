import React from "react";
import { Link } from "react-router-dom"
import "./Color.css"

const Color = ({color}) => {
    return(
        <div className="Color" style={{backgroundColor: color}}>
            <p className="Color-text">
                THIS IS <i>{color.toUpperCase()}</i>. ISN'T IT AMAZING?
            </p>
            <Link className="return-link" to ="/colors">RETURN</Link>
        </div>
    )
}

export default Color;