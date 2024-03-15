import React from "react";
import Avatar from '@mui/material/Avatar';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <Avatar 
            id={generateId("Avatar")}
            {...props}
        />
    );
};  

export default Plugin;