import React from "react";
import { DataGrid } from '@mui/x-data-grid';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <DataGrid 
            id={generateId("DataGrid")}
            {...props}
        />
    );
};  

export default Plugin;