import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

const ForecastSection = ({ match }) => (
    <section className='forecast-main'>
        <h1>Forecast Weather</h1>
        day: { match.params.day }
    </section>
);

// ForecastSection.propTypes = {
//     id: PropTypes.number.isRequired,
// };

// const mapStateToProps = (state, ownProps) => {
//     console.log(ownProps);
//     const day = ownProps.match.params.id;
//     return {
//         id: day,
//     };
// };

export default ForecastSection;
