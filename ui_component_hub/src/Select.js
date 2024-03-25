import React from "react";
import Select from '@mui/material/Select';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <Select 
            id={generateId("Select")}
            {...props}
        />
    );
};  

export default Plugin;