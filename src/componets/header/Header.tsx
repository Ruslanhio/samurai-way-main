import React from "react";
import s from './Header.module.css'


export const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.header__img}
                 src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png" alt=""/>
        </header>
    )
}
