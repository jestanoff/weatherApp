import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ country, name, region }) => (
    <section className='location__container'>
        <span className='location__name'>{ name }</span>,&nbsp;
        <span className='location__region'>{ region }</span>,&nbsp;
        <span className='location__country'>{ country }</span>
    </section>
);

Location.propTypes = {
    country: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
};

export default Location;
