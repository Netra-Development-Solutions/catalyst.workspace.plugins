import React from "react";
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const Plugin = (props) => {
    return (
        <Autocomplete 
            id={generateId("Autocomplete")}
            {...props}
        />
    );
};  

export const filterOptions = createFilterOptions;

export default Plugin;