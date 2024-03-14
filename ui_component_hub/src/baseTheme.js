import { createTheme } from "@mui/material"

const muiThemeMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

export const themeOptions = {
    palette: {
        mode: muiThemeMode,
        primary: {
            main: '#ffcc00'
        },
        secondary: {
            main: '#6600cc',
        },
    },
    typography: {
        button: {
            fontFamily: 'Montserrat',
        },
        caption: {
            fontFamily: 'Montserrat',
        },
        overline: {
            fontFamily: 'Montserrat',
        },
        fontFamily: 'Montserrat',
    },
}

export const theme = createTheme(themeOptions)

export default theme