import React from 'react';
import PropTypes from 'prop-types';

const ForecastHourColumn = ({ hour, icon, temp, wind, windDirection }) => (
    <article className='forecast-hour-column'>
        <div className='forecast-hour-column__hour'>{ (hour < 10 && '0') + hour }:00</div>
        <div className='forecast-hour-column__icon'><img src={ icon } alt='icon' /></div>
        <div className='forecast-hour-column__temp'>{ temp }° C</div>
        <div className='forecast-hour-column__wind'>{ wind }kph</div>
        <div className='forecast-hour-column__wind-direction'>{ windDirection }</div>
    </article>
);

ForecastHourColumn.propTypes = {
    hour: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
    windDirection: PropTypes.string.isRequired,
};

export default ForecastHourColumn;
