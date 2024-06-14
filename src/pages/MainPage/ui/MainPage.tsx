import React from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonError } from 'app/providers/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <ButtonError />
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
