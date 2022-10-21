import useLocalStorage from 'use-local-storage'






import React from 'react';
import css from "./Header.module.css";

const Switch = () => {

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const swichTheme = ()=>{

        const newTheme =theme==='light'?'dark':'light';
        setTheme(newTheme)

    }


    return (
        <div>

            <div className={css.App1} data-theme={theme}>
                <button className={css.swich_button} onClick={swichTheme}>
                    Swich to {theme==='light' ? 'Dark' :'Light'} Theme
                </button>
        </div>
        </div>
    );
};

export {
    Switch
}