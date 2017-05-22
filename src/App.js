import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Location from './components/Location';
import Search from './components/Search';
import ForecastNav from './containers/ForecastNav';
import { getGeolocation } from './actions';
import ForecastSection from './containers/ForecastSection';


class App extends Component {
    componentWillMount() {
        this.props.getGeolocation();
    }

    render() {
        const { country, name, region, isFetching, isDataAvailable } = this.props;
        return (
            <section className='app-container'>
                { isFetching && <div className='loading-spinner'>Loading...</div> }
                <header>
                    <Location country={ country } name={ name } region={ region } />
                    <Search />
                </header>
                <nav>
                    { isDataAvailable && <ForecastNav forecastDays={ 5 } /> }
                </nav>
                { isDataAvailable && <div className='main-container'>
                    <ForecastSection />
                </div> }
            </section>
        );
    }
}

App.propTypes = {
    getGeolocation: PropTypes.func.isRequired,
    country: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    isDataAvailable: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
    // const isOpenWeatherAvailable = Object.keys(state.openWeather.current || {}).length > 0;
    const isApixuAvailable = Object.keys(state.apixu.current || {}).length > 0;
    const isFetching = state.openWeather.isFetching || state.apixu.isFetching;
    const { coords, units } = state.settings;
    const name = isApixuAvailable ? state.apixu.location.name : '-';
    const isDataAvailable = isApixuAvailable;

    return {
        isFetching,
        isDataAvailable,
        coords,
        units,
        name,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        getGeolocation: bindActionCreators(getGeolocation, dispatch),
    };
}

export { App };

export default connect(mapStateToProps, mapDispatchToProps)(App);
