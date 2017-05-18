import React from 'react';
import PropTypes from 'prop-types';

const CurrentWeather = ({ icon, temp, units }) => (
    <section className='current-weather__container'>
        <div className='current-weather__icon'><img src={ icon } alt='weather icon' /></div>
        <div className='current-weather__temp'>
            { temp }
            <span className='current-weather_units'>{ units }</span>
        </div>
    </section>
);

CurrentWeather.propTypes = {
    icon: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    units: PropTypes.string.isRequired,
};

export default CurrentWeather;
