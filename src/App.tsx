import { ThemeContext } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { useState } from "react";

export function App() {
    const [theme, setTheme] = useState(() => createTheme({ palette: { mode: 'dark' } }))

    return (
        <>
            <ThemeContext.Provider value={theme}>
                <CssBaseline enableColorScheme />
            </ThemeContext.Provider>
        </>
    )
}
