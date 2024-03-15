import React from "react";
import Container from '@mui/material/Container';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <Container 
            id={generateId("Container")}
            {...props}
        />
    );
};  

export default Plugin;