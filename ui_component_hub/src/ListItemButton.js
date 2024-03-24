import React from "react";
import ListItemButton from '@mui/material/ListItemButton';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <ListItemButton 
            id={generateId("ListItemButton")}
            {...props}
        />
    );
};  

export default Plugin;