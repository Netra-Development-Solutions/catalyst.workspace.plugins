import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <CircularProgress 
            id={generateId("CircularProgress")}
            {...props}
        />
    );
};  

export default Plugin;