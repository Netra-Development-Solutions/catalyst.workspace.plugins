import React from "react";
import DialogContentText from '@mui/material/DialogContentText';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <DialogContentText 
            id={generateId("DialogContentText")}
            {...props}
        />
    );
};  

export default Plugin;