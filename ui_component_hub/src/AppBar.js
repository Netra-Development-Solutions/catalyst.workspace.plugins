import React from "react";
import AppBar from '@mui/material/AppBar';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const AppBarPlugin = (props) => {
    return (
        <AppBar 
            id={generateId("appBar")}
            {...props}
        />
    );
};  

export default AppBarPlugin;