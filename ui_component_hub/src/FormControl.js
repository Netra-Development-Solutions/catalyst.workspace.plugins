import React from "react";
import FormControl from '@mui/material/FormControl';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <FormControl 
            id={generateId("FormControl")}
            {...props}
        />
    );
};  

export default Plugin;