import React from "react";
import DialogActions from '@mui/material/DialogActions';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <DialogActions 
            id={generateId("DialogActions")}
            {...props}
        />
    );
};  

export default Plugin;