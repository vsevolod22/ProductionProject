import React, { Suspense } from 'react';
import './styles/index.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProviders';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar';
import { useTranslation } from 'react-i18next';

const App = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<span>{t('loading')}</span>}>
                <NavBar />

                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
