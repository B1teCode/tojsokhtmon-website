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
                    <a href="/tojsokhtmon-website/flats">Выбрать квартиру</a>
                    <a href="/tojsokhtmon-website/storeroom">Кладовые</a>
                    <a href="/parking">Машиноместа</a>
                    <a href="/commercial">Коммерческие помещения</a>
                    <a href="/promotions">Акции</a>
                    <a href="/news">Новости</a>
                    <a href="/customers">Клиентам</a>
                    <a href="/offices">Офисы продаж</a>
                    <a href="/about">О компании</a>
                </div>

                <div className="nav-footer">
                    <a href="tel:+9925060" className='nav-footer-tel'>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        5060
                    </a>
                    Позвонить вам?
                    <span>
                        <a href="https://t.me/tojsokhtmon" target='_blank'><i class="fa fa-telegram" aria-hidden="true"></i></a>
                        <a href="https://www.youtube.com/@tojsokhtmon-l3q" target='_blank'><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                        <a href="https://www.facebook.com/tojsokhtmon?mibextid=LQQJ4d" target='_blank'><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/tojsokhtmon?igsh=MWdmenZ5enBsODRpaw==" target='_blank'><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    </span>
                </div>
            </nav>
        </div>
    );
};

export default Menu;
