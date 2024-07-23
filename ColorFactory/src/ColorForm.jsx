import React, {useState} from "react";
import { Navigate } from "react-router-dom";

const ColorForm = ({colors, handleFormSubmit}) => {
    const initialState = {
        color:""
    }

    const [formData, setFormData] = useState(initialState)
    const [submitted, setSubmitted] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        const {color} = formData;
        
        // simple form validation that checks for existing colors / empty field
        if (colors.find(c => c===color)){
            alert(`Color already exists. Please input another!`)
            setFormData(initialState);
            return;
        }
        else if (color===""){
            alert(`Please input a color!`)
            return;
        }
        // if passes validation continues with changing state
        handleFormSubmit(color);
        setFormData(initialState);
        setSubmitted(true)
    }

    // if submission happens, redirects to homepage to show new color
    if (submitted){
        return (<Navigate to="/colors" />)
    }

    return (
        <>
        <p>Add a CSS-friendly color!</p>
        <form onSubmit = {handleSubmit}>
            <label htmlFor="color">Color: </label>
            <input
                id = "color"
                type = "text"
                name = "color"
                placeholder="e.g. orange"
                value = {formData.color}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
        </>
    )
}

export default ColorForm;