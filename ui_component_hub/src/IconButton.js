import React from "react";
import IconButton from '@mui/material/IconButton';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <IconButton 
            id={generateId("IconButton")}
            {...props}
        />
    );
};  

export default Plugin;