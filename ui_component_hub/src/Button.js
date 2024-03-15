import React from "react";
import Button from '@mui/material/Button';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <Button 
            id={generateId("Button")}
            {...props}
        />
    );
};  

export default Plugin;