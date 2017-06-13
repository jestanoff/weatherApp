import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ForecastNavItem from '../components/ForecastNavItem';

const ForecastNav = ({ forecastDays, forecastDay, sampleColor }) => {
    const navItems = Array.from(
        { length: forecastDays },
        (_, i) =>
            <ForecastNavItem
              tabBackground={ sampleColor }
              date={ forecastDay[i].date }
              day={ i }
              icon={ forecastDay[i].day.condition.icon }
              key={ forecastDay[i].date_epoch }
              maxTemp={ Math.round(forecastDay[i].day.maxtemp_c) }
              minTemp={ Math.round(forecastDay[i].day.mintemp_c) }
            />,
    );
    return (
        <ul className='forecast-nav'>
            { navItems }
        </ul>
    );
};

ForecastNav.propTypes = {
    forecastDays: PropTypes.number.isRequired,
    forecastDay: PropTypes.array.isRequired, // eslint-disable-line
    sampleColor: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    forecastDay: state.apixu.forecast.forecastday,
    sampleColor: state.settings.sampleColor,
});

export default withRouter(connect(mapStateToProps)(ForecastNav));
