import React from "react";
import CssBaseline from '@mui/material/CssBaseline';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <CssBaseline 
            id={generateId("CssBaseline")}
            {...props}
        />
    );
};  

export default Plugin;