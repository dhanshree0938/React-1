import { createContext, useState } from "react";
import { RouterProvider } from "react-router";

export const ThemeContext=createContext();

// export function ThemeContext=createContext();

export function ThemeProvider(props){
    const[theme,setTheme]=useState('light');
    return(

        <ThemeContext.Provider value={{theme,setTheme}}>
            {props.children}
            {/* refers to<RouterProvider> */}

            </ThemeContext.Provider>
    )

}