import React from 'react';
import "bulma/css/bulma.min.css";
import { useNavigate } from 'react-router-dom';
import './Menu.scss';
import icon from '../../imgs/2.svg';
import icon2 from '../../imgs/3.svg';
import icon3 from '../../imgs/4.svg';


export const Menu: React.FC = () => {
    const redirect = useNavigate();
    const handlCklick = () => {
        redirect('/form');
    };

    return (
        <div className='menuCustom js-modal-trigger'>
            <label className='menuCustom__block'
            onClick={handlCklick}
            >
                <img src={icon} alt='pen' />
                <span>Редагувати</span>
            </label>
            <div className='menuCustom__block'>
                <img src={icon2} alt='save' />
                <span>Зберегти</span>
            </div>
             <div className='menuCustom__block'>
                <img src={icon3} alt='trash' />
                <span>Видалити</span>
            </div>
        </div>
    );
};