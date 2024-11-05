import React, { useState } from 'react';
import Select from 'react-select';
import './Buildings_component.css';
import cart1 from '../assets/images/img/cart1.jpg';
import cart2 from '../assets/images/img/cart2.PNG';
import cart3 from '../assets/images/img/cart3.PNG';
import cart4 from '../assets/images/img/cart4.JPG';
import cart5 from '../assets/images/img/cart5.JPG';
import cart7 from '../assets/images/img/cart6.PNG';
import cart6 from '../assets/images/img/cart7.PNG';
import cart8 from '../assets/images/img/cart8.PNG';


const Buildings_component = () => {
    const objectOptions = [
        { value: 'all', label: 'Все объекты' },
        { value: 'apartments', label: 'Квартиры' },
        { value: 'houses', label: 'Дома' },
    ];

    const deadlineOptions = [
        { value: 'any', label: 'Любой' },
        { value: '2024', label: '2024' },
        { value: '2025', label: '2025' },
    ];

    const [selectedTags, setSelectedTags] = useState([]);

    const tags = [
        { id: 'keys', label: 'С ключами', iconClass: 'fa fa-key' },
        { id: 'economy', label: 'Эконом', iconClass: 'fa fa-building' },
        { id: 'comfort', label: 'Комфорт', iconClass: 'fa fa-building' },
        { id: 'business', label: 'Бизнес', iconClass: 'fa fa-building' },
        { id: 'white-box', label: 'White box', iconClass: 'fa fa-paint-brush' },
        { id: 'plaster', label: 'Штукатурка', iconClass: 'fa fa-paint-brush' },
    ];

    const handleTagChange = (tagId) => {
        setSelectedTags((prevSelectedTags) =>
            prevSelectedTags.includes(tagId)
                ? prevSelectedTags.filter((id) => id !== tagId)
                : [...prevSelectedTags, tagId]
        );
    };

    const customSelectStyles = {
        control: (provided, state) => ({
            ...provided,
            height: '50px',
            fontSize: '14px',
            borderRadius: '8px',
            borderColor: state.isFocused ? '#10554b' : '#D5D7DA', // Цвет рамки при фокусе
            boxShadow: state.isFocused ? '0 0 0 0px #10554b' : 'none', // Подсветка при фокусе
            color: '#abaaaa',
            '&:hover': { borderColor: '#10554b' }, // Цвет рамки при наведении
        }),
        option: (provided, state) => ({
            ...provided,
            width: '98%',
            margin: '0 auto 1%',
            fontSize: '16px',
            borderRadius: '8px',
            color: state.isSelected ? 'white' : 'gray',
            backgroundColor: state.isSelected
                ? '#10554b' // Цвет фона для выбранного элемента
                : state.isFocused
                    ? '#e8f4f2' // Цвет фона при наведении
                    : 'white',
            '&:hover': {
                backgroundColor: '#e8f4f2', // Цвет фона при наведении
            },
        }),
        singleValue: (provided) => ({
            ...provided,
            fontSize: '14px',
            color: 'gray',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#abaaaa',
        }),
    };


    return (
        <div className='buildings'>
            <div className="filter">
                <div className='filter-form'>
                    <div className='filter-1str'>
                        <div className="filter-group">
                            <label>Тип объекта</label>
                            <Select
                                options={objectOptions}
                                styles={customSelectStyles}
                                className="custom-select"
                                placeholder="Все объекты"
                            />
                        </div>
                        <div className="filter-group">
                            <label>Срок сдачи</label>
                            <Select
                                options={deadlineOptions}
                                styles={customSelectStyles}
                                className="custom-select"
                                placeholder="Любой"
                            />
                        </div>
                    </div>
                    <div className='filter-2str'>
                        <div className="tags">
                            {tags.map((tag) => (
                                <label key={tag.id} className={`tag ${selectedTags.includes(tag.id) ? 'active' : ''}`}>
                                    <input
                                        type="checkbox"
                                        checked={selectedTags.includes(tag.id)}
                                        onChange={() => handleTagChange(tag.id)}
                                    />
                                    <i className={tag.iconClass} style={{ marginRight: '8px' }}></i> {/* Иконка перед текстом */}
                                    {tag.label}
                                </label>
                            ))}
                        </div>
                        <button className="submit-button">Подобрать</button>
                    </div>
                </div>
                <div className='filter-result-count'>
                    <h2>25<br />проектов</h2>
                </div>
            </div>

            <div className='carts'>
                <div className='cart'>
                    <div className='cart-header'>
                        <img src={cart1} alt='cart1' />
                        <div className='cart-tags'>
                            <div className='cart-tag'><i className='fa fa-building'></i>Бизнес</div>
                            <div className='cart-tag'><i className='fa fa-paint-brush'></i>Штукатурка</div>
                        </div>
                    </div>
                    <div className='cart-footer'>
                        <div className='title-description'>
                            <h2>Империал</h2>
                            <p>17 МКР</p>
                        </div>
                        <div className='apartments-price'>
                            <p>
                                <span>364 квартиры</span>
                                <span>от $700</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='cart'>
                    <div className='cart-header'>
                        <img src={cart2} alt='cart1' />
                        <div className='cart-tags'>
                            <div className='cart-tag'><i className='fa fa-building'></i>Эконом</div>
                            <div className='cart-tag'><i className='fa fa-paint-brush'></i>Штукатурка</div>
                        </div>
                    </div>
                    <div className='cart-footer'>
                        <div className='title-description'>
                            <h2>Тавхид</h2>
                            <p>Ул. А Фирдавси 117, рядом с Waikiki</p>
                        </div>
                        <div className='apartments-price'>
                            <p>
                                <span>374 квартир</span>
                                <span>от $800</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='cart'>
                    <div className='cart-header'>
                        <img src={cart3} alt='cart1' />
                        <div className='cart-tags'>
                            <div className='cart-tag'><i className='fa fa-building'></i>Комфорт</div>
                            <div className='cart-tag'><i className='fa fa-paint-brush'></i>Штукатурка</div>
                            <div className='cart-tag'><i className='fa fa-key'></i>С ключами</div>
                        </div>
                    </div>
                    <div className='cart-footer'>
                        <div className='title-description'>
                            <h2>Согдиана</h2>
                            <p>Ул. М. Тамбури рядом с Парком Камоли Худжанди</p>
                        </div>
                        <div className='apartments-price'>
                            <p>
                                <span>409 квартиры</span>
                                <span>от $700</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='cart'>
                    <div className='cart-header'>
                        <img src={cart4} alt='cart1' />
                        <div className='cart-tags'>
                            <div className='cart-tag'><i className='fa fa-building'></i>Бизнес</div>
                            <div className='cart-tag'><i className='fa fa-paint-brush'></i>Штукатурка</div>
                        </div>
                    </div>
                    <div className='cart-footer'>
                        <div className='title-description'>
                            <h2>Спутник</h2>
                            <p>Ул. Пахтакор</p>
                        </div>
                        <div className='apartments-price'>
                            <p>
                                <span>76 квартиры</span>
                                <span>от $400</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='cart'>
                    <div className='cart-header'>
                        <img src={cart5} alt='cart1' />
                        <div className='cart-tags'>
                            <div className='cart-tag'><i className='fa fa-building'></i>Бизнес</div>
                            <div className='cart-tag'><i className='fa fa-paint-brush'></i>Штукатурка</div>
                        </div>
                    </div>
                    <div className='cart-footer'>
                        <div className='title-description'>
                            <h2>Рудаки Плаза - 2</h2>
                            <p>13 мкр</p>
                        </div>
                        <div className='apartments-price'>
                            <p>
                                <span>40 квартиры</span>
                                <span>от $600</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='cart'>
                    <div className='cart-header'>
                        <img src={cart7} alt='cart1' />
                        <div className='cart-tags'>
                            <div className='cart-tag'><i className='fa fa-building'></i>Бизнес</div>
                            <div className='cart-tag'><i className='fa fa-paint-brush'></i>Штукатурка</div>
                        </div>
                    </div>
                    <div className='cart-footer'>
                        <div className='title-description'>
                            <h2>ЖК 12 мкр - 2</h2>
                            <p>12 мкр</p>
                        </div>
                        <div className='apartments-price'>
                            <p>
                                <span>12 квартиры</span>
                                <span>от $450</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='cart'>
                    <div className='cart-header'>
                        <img src={cart6} alt='cart1' />
                        <div className='cart-tags'>
                            <div className='cart-tag'><i className='fa fa-building'></i>Бизнес</div>
                            <div className='cart-tag'><i className='fa fa-paint-brush'></i>Штукатурка</div>
                        </div>
                    </div>
                    <div className='cart-footer'>
                        <div className='title-description'>
                            <h2>ЖК Бустон</h2>
                            <p>г. Бустон, Памир базар</p>
                        </div>
                        <div className='apartments-price'>
                            <p>
                                <span>140 квартиры</span>
                                <span>от $450</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='cart'>
                    <div className='cart-header'>
                        <img src={cart8} alt='cart1' />
                        <div className='cart-tags'>
                            <div className='cart-tag'><i className='fa fa-building'></i>Бизнес</div>
                            <div className='cart-tag'><i className='fa fa-paint-brush'></i>Штукатурка</div>
                        </div>
                    </div>
                    <div className='cart-footer'>
                        <div className='title-description'>
                            <h2>ЖК 8 мкр</h2>
                            <p>8 мкр</p>
                        </div>
                        <div className='apartments-price'>
                            <p>
                                <span>288 квартир</span>
                                <span>от $400</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buildings_component;
