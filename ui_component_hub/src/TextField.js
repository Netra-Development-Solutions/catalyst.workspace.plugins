import React from "react";
import TextField from '@mui/material/TextField';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <TextField 
            id={generateId("TextField")}
            {...props}
        />
    );
};  

export default Plugin;