import React from 'react';
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import styles from './NavBar.module.scss'
import AppLink from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";


interface NavBarProps {
    className?: string;

}


const NavBar = ({className} : NavBarProps) => {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>

            <div className={styles.links}>
                <AppLink to='/' className={styles.mainLink}>Главная</AppLink>
                <AppLink to='/about'>О сайте</AppLink>
            </div>

        </div>
    );
};

export default NavBar;