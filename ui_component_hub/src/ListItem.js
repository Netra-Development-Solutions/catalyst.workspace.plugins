import React from "react";
import ListItem from '@mui/material/ListItem';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <ListItem 
            id={generateId("ListItem")}
            {...props}
        />
    );
};  

export default Plugin;