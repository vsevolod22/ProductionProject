import React from 'react';
import styles from  './couner.module.scss'
export const Counter = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h1>Число {count}</h1>
            <button className={styles.button} onClick={() => setCount(count + 1)} >increment</button>
        </div>
    );
};
