import React from "react";
import Divider from '@mui/material/Divider';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <Divider 
            id={generateId("Divider")}
            {...props}
        />
    );
};  

export default Plugin;