import React from "react";
import Stack from '@mui/material/Stack';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <Stack 
            id={generateId("Stack")}
            {...props}
        />
    );
};  

export default Plugin;