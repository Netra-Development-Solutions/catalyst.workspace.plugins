import React from "react";
import ListItemText from '@mui/material/ListItemText';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <ListItemText 
            id={generateId("ListItemText")}
            {...props}
        />
    );
};  

export default Plugin;