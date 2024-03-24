import React from "react";
import Drawer from '@mui/material/Drawer';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <Drawer 
            id={generateId("Drawer")}
            {...props}
        />
    );
};  

export default Plugin;