import React from "react";
import FormControlLabel from '@mui/material/FormControlLabel';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <FormControlLabel 
            id={generateId("FormControlLabel")}
            {...props}
        />
    );
};  

export default Plugin;