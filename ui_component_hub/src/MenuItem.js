import React from "react";
import MenuItem from '@mui/material/MenuItem';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <MenuItem 
            id={generateId("MenuItem")}
            {...props}
        />
    );
};  

export default Plugin;