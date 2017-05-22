import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('<App />', () => {
    it('should render proper markup', () => {
        const getGeolocation = jest.fn();
        const props = {
            country: 'Bg',
            name: 'Sf',
            region: 'Ln',
            isFetching: false,
            isDataAvailable: false,
            getGeolocation,
        };
        const wrapper = shallow(<App { ...props } />);
        expect(wrapper).toBeDefined();
        expect(getGeolocation).toHaveBeenCalledTimes(1);
    });
});
