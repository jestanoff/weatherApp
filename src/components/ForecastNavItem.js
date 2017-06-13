import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sut'];

const ForecastNavItem = ({ day, minTemp, maxTemp, icon, date, tabBackground }) => (
    <li className='nav-item'>
        <NavLink
          className='nav-link'
          to={ `/day=${day}` }
          style={ { background: tabBackground }
            }
        >
            <div className='nav-date'>{ weekDays[new Date(date).getDay()] }</div>
            <div className='nav-temp__container'>
                <div className='nav-icon'><img src={ icon } alt='icon' /></div>
                <div className='nav-temp'>
                    <div className='nav-max-temp'>{ maxTemp }°C</div>
                    <div className='nav-min-temp'>{ minTemp }°C</div>
                </div>
            </div>
        </NavLink>
    </li>
    );

ForecastNavItem.propTypes = {
    minTemp: PropTypes.number.isRequired,
    maxTemp: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    day: PropTypes.number.isRequired,
    tabBackground: PropTypes.string,
};

ForecastNavItem.defaultProps = {
    tabBackground: '#226083',
};

export default ForecastNavItem;
