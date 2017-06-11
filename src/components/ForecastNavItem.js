import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sut'];

const ForecastNavItem = ({ day, minTemp, maxTemp, icon, date }) => (
    <li className='nav-item'>
        <NavLink to={ `/day=${day}` } exact className='nav-link' replace>
            <div className='nav-date'>{ weekDays[new Date(date).getDay()] }</div>
            <div className='nav-icon'><img src={ icon } alt='icon' /></div>
            <div className='nav-max-temp'>{ maxTemp }</div>
            <div className='nav-min-temp'>{ minTemp }</div>
        </NavLink>
    </li>
);

ForecastNavItem.propTypes = {
    minTemp: PropTypes.number.isRequired,
    maxTemp: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    day: PropTypes.number.isRequired,
};

export default ForecastNavItem;
