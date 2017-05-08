import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ForecastSection = ({ cloud, feelsLike, humidity, icon, temp, text, windDir, windSpeed }) => (
    <section className='forecast-main'>
        <div className='cloud'>Cloud: { cloud }</div>
        <div className='feelsLike'>Feels like: { feelsLike }</div>
        <div className='humidity'>Humidity: { humidity }</div>
        <div className='icon'><img src={ icon } alt='weather icon' /></div>
        <div className='text'>{ text }</div>
        <div className='temp'>Temperature: { temp }</div>
        <div className='windDir'>Wind direction: { windDir }</div>
        <div className='windSpeed'>Wing speed: { windSpeed }</div>
    </section>
);

ForecastSection.propTypes = {
    cloud: PropTypes.number.isRequired,
    feelsLike: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    windDir: PropTypes.string.isRequired,
    windSpeed: PropTypes.number.isRequired,
};

const mapStateToProps = state => (
    {
        cloud: state.apixu.current.cloud,
        icon: state.apixu.current.condition.icon,
        text: state.apixu.current.condition.text,
        feelsLike: state.apixu.current.feelslike_c,
        humidity: state.apixu.current.humidity,
        temp: state.apixu.current.temp_c,
        windDir: state.apixu.current.wind_dir,
        windSpeed: state.apixu.current.wind_mph,
    }
);

export default connect(mapStateToProps)(ForecastSection);
