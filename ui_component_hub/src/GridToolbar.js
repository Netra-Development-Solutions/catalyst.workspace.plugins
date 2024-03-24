import React from "react";
import { GridToolbar } from '@mui/x-data-grid';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <GridToolbar 
            id={generateId("GridToolbar")}
            {...props}
        />
    );
};  

export default Plugin;