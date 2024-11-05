// src/pages/Home.js

import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';
import Buildings_component from '../components/Buildings_component';

import promo1 from '../assets/images/img/promo1.png';
import promo2 from '../assets/images/img/promo2.png';
import promo3 from '../assets/images/img/promo3.png';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        <div className="slide slide-s">
            <div className='promotion-slide-description'>
                <div className='promotion-slide-description-content'>
                    <h2>Суперакция</h2>
                    <p>Купи квартиру и получи iPhone 16 Pro в подарок!</p>
                    <a href='#'>Подробнее</a>
                </div>
            </div>
            <div className='promotion-slide-img'>
                <img src={promo1} alt='Promo1' />
            </div>
        </div>,
        // <div className="slide slide-s">
        //     <div className='promotion-slide-description'>
        //         <div className='promotion-slide-description-content'>
        //             <h2>Суперакция</h2>
        //             <p>Купи квартиру и получи iPhone 16 Pro в подарок!</p>
        //             <a href='#'>Подробнее</a>
        //         </div>
        //     </div>
        //     <div className='promotion-slide-img'>
        //         <img src={promo2} alt='Promo2' />
        //     </div>
        // </div>,
        // <div className="slide slide-s">
        //     <div className='promotion-slide-description'>
        //         <div className='promotion-slide-description-content'>
        //             <h2>Суперакция</h2>
        //             <p>Купи квартиру и получи iPhone 16 Pro в подарок!</p>
        //             <a href='#'>Подробнее</a>
        //         </div>
        //     </div>
        //     <div className='promotion-slide-img'>
        //         <img src={promo3} alt='Promo3' />
        //     </div>
        // </div>,
    ];

    const progressRef = useRef(null);

    const resetProgressAnimation = () => {
        if (progressRef.current) {
            progressRef.current.style.animation = 'none';
            setTimeout(() => {
                progressRef.current.style.animation = '';
            }, 10);
        }
    };

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        resetProgressAnimation();
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
        resetProgressAnimation();
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="pages-content">
            <header>
                <div className="slider">
                    <div className="slide-container">
                        <div
                            className="slides-wrapper"
                            style={{
                                transform: `translateX(-${currentSlide * 100}%)`
                            }}
                        >
                            {slides.map((slide, index) => (
                                <div key={index} className="slide">
                                    {slide}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <div className='pn-button'>
                        <button className="prev" onClick={prevSlide}>&#10094;</button>
                        <div className="progress-bar-container">
                            <div ref={progressRef} className="progress-bar"></div>
                        </div>
                        <button className="next" onClick={nextSlide}>&#10095;</button>
                    </div> */}
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
