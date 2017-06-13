import * as Vibrant from 'node-vibrant';
import image from '../images/backgorund_1920x1080.jpg';
import { setSampleColor, setSampleColorError } from '../actions';
import { GET_SAMPLE_COLOR } from '../constants/actions';

export default ({ dispatch }) => next => (action) => {
    if (action.type === GET_SAMPLE_COLOR) {
        Vibrant.from(image)
            .getSwatches((error, swatch) => {
                if (error) {
                    dispatch(setSampleColorError(error));
                } else {
                    const color = swatch[action.colorType].getHex();
                    dispatch(setSampleColor(color));
                }
            });
    }

    return next(action);
};
