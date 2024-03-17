import React from "react";
import Checkbox from '@mui/material/Checkbox';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <Checkbox 
            id={generateId("Checkbox")}
            {...props}
        />
    );
};  

export default Plugin;