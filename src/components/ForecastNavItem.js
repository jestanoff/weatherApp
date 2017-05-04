import React from 'react';
import PropTypes from 'prop-types';

const ForecastNavItem = ({ day }) => (
    <li className='nav-item'>
        day = { day }
    </li>
);

ForecastNavItem.propTypes = {
    day: PropTypes.number.isRequired,
};

export default ForecastNavItem;
