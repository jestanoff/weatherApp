import React from 'react';
import PropTypes from 'prop-types';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sut'];

const ForecastNavItem = ({ minTemp, maxTemp, icon, date }) => (
    <li className='nav-item'>
        <a href='#day' className='nav-link'>
            <div className='nav-date'>{ weekDays[new Date(date).getDay()] }</div>
            <div className='nav-icon'><img src={ icon } alt='icon' /></div>
            <div className='nav-max-temp'>{ maxTemp }</div>
            <div className='nav-min-temp'>{ minTemp }</div>
        </a>
    </li>
);

ForecastNavItem.propTypes = {
    minTemp: PropTypes.number.isRequired,
    maxTemp: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default ForecastNavItem;
