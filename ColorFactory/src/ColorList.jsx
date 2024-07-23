import React from "react";
import { Link } from "react-router-dom";
import "./ColorList.css"

const ColorList = ({colors}) => {
    let msg = colors.length > 0 ? "Select a color below to view." 
    : "No colors to see. Add one! "

    return (
        <div className="ColorList">
            <Link className="ColorForm-link" 
                    to="/colors/new">Add a color</Link>
            <h1>Color Factory</h1>
            <h4>{msg}</h4>
            <div>
                {colors.map (color => (
                    <div key = {color}> 
                        <Link to ={`/colors/${color}`} style={{color: color}}>
                            {color}
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default ColorList;