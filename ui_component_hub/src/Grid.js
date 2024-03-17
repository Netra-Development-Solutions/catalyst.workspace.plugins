import React from "react";
import Grid from '@mui/material/Grid';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <Grid 
            id={generateId("Grid")}
            {...props}
        />
    );
};  

export default Plugin;