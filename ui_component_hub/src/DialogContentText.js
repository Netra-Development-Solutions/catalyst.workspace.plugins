import React from "react";
import DialogContent from '@mui/material/DialogContent';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <DialogContent 
            id={generateId("DialogContent")}
            {...props}
        />
    );
};  

export default Plugin;