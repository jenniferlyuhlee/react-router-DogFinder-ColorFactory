import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Color from "./Color";

const FilterColor = ({colors}) => {
    const {color} = useParams();

    if (color){
        const currentColor = colors.find(
            c => c === color
        );
        if (currentColor){
            return <Color color = {currentColor} />;
        }
    }
    return <Navigate to="/colors" />
}

export default FilterColor;