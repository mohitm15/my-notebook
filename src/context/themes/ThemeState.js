import { useState } from "react";
import ThemeContext from "./themeContext";

const ThemeState = (props) => {
    const [theme, setTheme] = useState({
        light: true,
        dark: false,
        anotherDark: false,
        lushGreen:false,
    });

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeState;
