import React from "react";
import Paper from '@mui/material/Paper';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <Paper 
            id={generateId("Paper")}
            {...props}
        />
    );
};  

export default Plugin;