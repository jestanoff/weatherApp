import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import ForecastNavItem from '../components/ForecastNavItem';

const ForecastNav = ({ forecastDays }) => {
    const Nav = Array.from(
        { length: forecastDays }, (_, i) => <ForecastNavItem day={ i } key={ uuid() } />,
    );
    return (
        <nav>
            { Nav }
        </nav>
    );
};

ForecastNav.propTypes = {
    forecastDays: PropTypes.number.isRequired,
};

export default ForecastNav;
