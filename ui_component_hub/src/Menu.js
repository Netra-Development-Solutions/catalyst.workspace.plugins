import React from "react";
import Menu from '@mui/material/Menu';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <Menu 
            id={generateId("Menu")}
            {...props}
        />
    );
};  

export default Plugin;