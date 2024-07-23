import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ColorList from "./ColorList";
import FilterColor from "./FilterColor";
import ColorForm from "./ColorForm";

const RoutesList = ({colors, handleFormSubmit}) => {
    return (
        <Routes>
            <Route path = "/colors" 
                    element = {<ColorList colors = {colors}/>} />
            <Route path = "/colors/:color" 
                    element = {<FilterColor colors = {colors}/>} />
            <Route path = "/colors/new" 
                    element = {<ColorForm colors = {colors} handleFormSubmit={handleFormSubmit}/>} />
            <Route path = "/*"
                    element = {<Navigate to="/colors"/>} />
        </Routes>
    )
}

export default RoutesList;