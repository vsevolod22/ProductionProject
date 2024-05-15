import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink from 'shared/ui/AppLink/AppLink';
import styles from './NavBar.module.scss';

interface NavBarProps {
    className?: string;

}

const NavBar = ({ className }: NavBarProps) => (
    <div className={classNames(styles.navbar, {}, [className])}>

        <div className={styles.links}>
            <AppLink to="/" className={styles.mainLink}>Главная</AppLink>
            <AppLink to="/about">О сайте</AppLink>
        </div>
    </div>
);

export default NavBar;
