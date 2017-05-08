import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import ForecastNavItem from '../components/ForecastNavItem';

const ForecastNav = ({ forecastDays, forecastDay }) => {
    const navItems = Array.from(
        { length: forecastDays },
        (_, i) =>
            <ForecastNavItem
              key={ uuid() }
              minTemp={ forecastDay[i].day.mintemp_c }
              maxTemp={ forecastDay[i].day.maxtemp_c }
              icon={ forecastDay[i].day.condition.icon }
              date={ forecastDay[i].date }
            />,
    );
    return (
        <nav>
            <ul className='forecast-nav'>
                { navItems }
            </ul>
        </nav>
    );
};

ForecastNav.propTypes = {
    forecastDays: PropTypes.number.isRequired,
    forecastDay: PropTypes.array.isRequired, // eslint-disable-line
};

const mapStateToProps = state => ({
    forecastDay: state.apixu.forecast.forecastday,
});

export default connect(mapStateToProps)(ForecastNav);
