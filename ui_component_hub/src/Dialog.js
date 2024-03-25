import React from "react";
import Dialog from '@mui/material/Dialog';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <Dialog 
            id={generateId("Dialog")}
            {...props}
        />
    );
};  

export default Plugin;