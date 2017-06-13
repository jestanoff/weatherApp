import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForecastHourColumn from '../components/ForecastHourColumn';

const ForecastSection = ({ hours, sunrise, sunset }) => {
    const ForecastHourColumnItems = () =>
        hours.map((hour) => {
            const props = {
                key: hour.time_epoch,
                hour: (new Date(hour.time)).getHours(),
                icon: hour.condition.icon,
                temp: Math.round(hour.temp_c),
                wind: Math.round(hour.wind_kph),
                windDirection: hour.wind_dir,
            };
            return <ForecastHourColumn { ...props } />;
        });

    return (
        <section className='forecast-main'>
            <div className='forecast-main__day-info'>
                <span className='forecast-main__sunrise'>sunrise: { sunrise }</span>
                <span className='forecast-main__sunset'>sunset: { sunset }</span>
            </div>
            <section className='forecast-graph'>
                { ForecastHourColumnItems() }
            </section>
        </section>
    );
};

ForecastSection.propTypes = {
    hours: PropTypes.array.isRequired, // eslint-disable-line
    sunrise: PropTypes.string.isRequired,
    sunset: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    const day = ownProps.match.params.day;
    const hours = state.apixu.forecast.forecastday[day].hour.filter(hour => (
        hour.time_epoch > Date.now() / 1000
    ));
    return {
        hours,
        sunrise: state.apixu.forecast.forecastday[day].astro.sunrise,
        sunset: state.apixu.forecast.forecastday[day].astro.sunset,
    };
};

export default connect(mapStateToProps)(ForecastSection);
