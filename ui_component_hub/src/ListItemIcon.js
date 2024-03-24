import React from "react";
import ListItemIcon from '@mui/material/ListItemIcon';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <ListItemIcon 
            id={generateId("ListItemIcon")}
            {...props}
        />
    );
};  

export default Plugin;