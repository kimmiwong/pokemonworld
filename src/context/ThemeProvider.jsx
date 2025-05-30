import { useState } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')


    const toggleTheme = () => {
        if(theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }

    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>

            {children}

        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
