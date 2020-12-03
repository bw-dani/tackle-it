import React, { createContext, useState, useContext } from 'react'

export const ThemeSwitch = createContext({ theme: "light" })

export const ThemeSwitchProvider = ({ children }) => {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {

        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <ThemeSwitch.Provider value={{
            theme,
            toggleTheme
        }} >
            {children}
        </ThemeSwitch.Provider>
    )
}

//Custom hook
export const useThemeSwitch = () => {
    const context = useContext(ThemeSwitch)
    if (context === undefined) {
        throw new Error('useThemeSwitch must be used within a ThemeProvider')
    }

    return context
}