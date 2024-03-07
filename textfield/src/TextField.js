import React from "react";
import TextField from "@mui/material/TextField";

const generateId = (prefix) => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

const TextFieldPlugin = ({ label, fullWidth }) => {
    return (
        <TextField 
            id={generateId("textfield")}
            label={label}
            fullWidth={fullWidth}
        />
    );
};  

export default TextFieldPlugin;