// src/components/Menu.js

import React, { useState } from 'react';
import logo from '../assets/images/logo/TS_LOGO-03.svg';
// Если у вас есть CSS для стилей меню

const Menu = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <div>
            {/* Кнопка меню-бургер/крестик */}
            <div className="menu-toggle" onClick={toggleMenu}>
                {isActive ? '✕' : '☰'}
            </div>

            {/* Навигация */}
            <nav id="nav" className={isActive ? 'active' : ''}>
                <div className="logo">
                    <a href="/tojsokhtmon-website/"><img src={logo} alt="logo" /></a>
                </div>

                <div className="nav-item">
                    <a href="/tojsokhtmon-website/buildings">Новостройки</a>
                    <a href="/flats">Выбрать квартиру</a>
                    <a href="/storeroom">Кладовые</a>
                    <a href="/parking">Машиноместа</a>
                    <a href="/commercial">Коммерческие помещения</a>
                    <a href="/promotions">Акции</a>
                    <a href="/news">Новости</a>
                    <a href="/customers">Клиентам</a>
                    <a href="/offices">Офисы продаж</a>
                    <a href="/about">О компании</a>
                </div>

                <div className="nav-footer">
                    <a href="tel:+9925060">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        5060
                    </a>
                    Позвонить вам?
                </div>
            </nav>
        </div>
    );
};

export default Menu;
