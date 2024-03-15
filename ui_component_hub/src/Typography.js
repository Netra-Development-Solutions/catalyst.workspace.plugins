import React from "react";
import Typography from '@mui/material/Typography';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <Typography 
            id={generateId("Typography")}
            {...props}
        />
    );
};  

export default Plugin;