import React from "react";
import { ThemeProvider } from "@mui/material/styles";

const ThemeProviderPlugin = ({ children, theme }) => {
    return (
        <ThemeProvider theme={theme} >
            {children}
        </ThemeProvider> 
    );
};  

export default ThemeProviderPlugin;