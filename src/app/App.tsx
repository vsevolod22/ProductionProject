import React, {Suspense, useContext, useState} from 'react';
import  './styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom';

import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProviders";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";
import {Sidebar} from "widgets/Sidebar";
import {useTranslation} from "react-i18next";
import {LangSwitcher} from "widgets/LangSwitcher";



const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback='loading'>
                <NavBar/>

                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter></AppRouter>
                </div>
            </Suspense>

        </div>
    );
};

export default App;
