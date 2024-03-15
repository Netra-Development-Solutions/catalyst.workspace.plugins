import React from "react";
import Toolbar from '@mui/material/Toolbar';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <Toolbar 
            id={generateId("toolbar")}
            {...props}
        />
    );
};  

export default Plugin;