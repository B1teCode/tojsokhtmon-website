// src/pages/Home.js

import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';
import { Helmet } from 'react-helmet';
import Buildings_component from '../components/Buildings_component';

import promo1 from '../assets/images/img/promo1.png';
import promo2 from '../assets/images/img/promo2.png';
import promo3 from '../assets/images/img/promo3.png';
import promo4 from '../assets/images/img/promo4.jpg';

const Home = () => {

    return (
        <div className="pages-content">
            <Helmet>
                <title>Главная - Строительная Компания Tojsokhtmon</title>
                <meta name="description" content="Добро пожаловать на главную страницу нашей строительной компании." />
                <meta name="keywords" content="строительство, недвижимость, строительная компания" />
            </Helmet>
            <header>
                <div className="promotion">
                    <div className='promotion-description'>
                        <div className='promotion-description-content'>
                            <h2>Старт продаж "ЖК Пахтакор"</h2>
                            <p>Купи квартиру и получи iPhone 16 Pro в подарок!</p>
                            <a href='#'>Подробнее</a>
                        </div>
                    </div>
                    <div className='promotion-img'>
                        <img src={promo4} alt='Promo1' />
                    </div>
                </div>
                <section>
                    <div className='section-title'>Проекты</div>
                    <div className='section-description'>Найдите свой идеальный дом в одном из <span>наших жилых комплексов</span></div>
                    <a href='#'>Выбрать квартиру <i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                </section>
            </header>

            <main>
                <Buildings_component />
            </main>

            <footer>
                <p>Футер страницы</p>
            </footer>
        </div>
    );
};

export default Home;
