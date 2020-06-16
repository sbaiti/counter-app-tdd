import { INCREMENT_ACt } from './types';

export const incrementAction = () => dispatch => {
    return dispatch({
        type: INCREMENT_ACt
    })
}