import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Location from './components/Location';
import Search from './components/Search';
import ForecastNav from './containers/ForecastNav';
import { getGeolocation } from './actions';


class App extends Component {
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(getGeolocation());
    }

    render() {
        const { isFetching } = this.props;
        return (
            <section className='app-container'>
                { isFetching && <div className='loading-spinner'>Loading...</div> }
                <header>
                    <Location city={ this.props.city } />
                    <Search />
                </header>
                <nav>
                    <ForecastNav forecastDays={ 4 } />
                </nav>
            </section>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    city: PropTypes.string.isRequired,
    isFetching: PropTypes.bool,
    // coords: PropTypes.objectOf(PropTypes.number).isRequired,
    // units: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
    const isOpenWeatherAvailable = Object.keys(state.openWeather.data).length > 0;
    const isFetching = state.openWeather.isFetching;
    const { coords, units } = state;
    const city = isOpenWeatherAvailable ? state.openWeather.data.name : 'Loading';

    return {
        isFetching,
        coords,
        units,
        city,
    };
};

export default connect(mapStateToProps)(App);
