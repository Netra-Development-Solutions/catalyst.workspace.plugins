import React from "react";
import Box from '@mui/material/Box';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <Box 
            id={generateId("box")}
            {...props}
        />
    );
};  

export default Plugin;