import React from "react";
import List from '@mui/material/List';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <List 
            id={generateId("List")}
            {...props}
        />
    );
};  

export default Plugin;