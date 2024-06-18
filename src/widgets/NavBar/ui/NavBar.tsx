import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => (
    <div className={classNames(styles.navbar, {}, [className])}>
        <div className={styles.links}>/</div>
    </div>
);

export default NavBar;
