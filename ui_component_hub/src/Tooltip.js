import React from "react";
import Tooltip from '@mui/material/Tooltip';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <Tooltip 
            id={generateId("Tooltip")}
            {...props}
        />
    );
};  

export default Plugin;