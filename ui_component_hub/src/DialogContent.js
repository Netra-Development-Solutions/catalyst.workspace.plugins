import React from "react";
import DialogTitle from '@mui/material/DialogTitle';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <DialogTitle 
            id={generateId("DialogTitle")}
            {...props}
        />
    );
};  

export default Plugin;