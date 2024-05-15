
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Sidebar.module.scss'
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";


interface SidebarProps {
    className?: string;

}


const Sidebar = ({className} : SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }
    return (
        <div className={classNames(styles.Sidebar, {[styles.collapsed] : collapsed}, [className])}>
           <button onClick={onToggle}>Toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={styles.lang}/>
            </div>

        </div>
    );
};

export default Sidebar;