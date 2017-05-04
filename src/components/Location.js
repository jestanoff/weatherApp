import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ city }) => (
    <section className='location-container'>
        { city }
    </section>
);

Location.propTypes = {
    city: PropTypes.string.isRequired,
};

export default Location;
