import React from "react";
import Link from '@mui/material/Link';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <Link 
            id={generateId("Link")}
            {...props}
        />
    );
};  

export default Plugin;