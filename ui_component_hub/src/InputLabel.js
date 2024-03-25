import React from "react";
import InputLabel from '@mui/material/InputLabel';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <InputLabel 
            id={generateId("InputLabel")}
            {...props}
        />
    );
};  

export default Plugin;