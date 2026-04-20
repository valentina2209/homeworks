import React from 'react';
import css from './Loader.module.css';

const Loader = () => {
    return (
        <div className={css.loaderWrapper}>
            <div className={css.spinner}>
                <div className={css.innerCircle}></div>
            </div>
            <p className={css.text}>Оновлюємо дані...</p>
        </div>
    );
};

export default Loader;