import { DECREMENT_ACT } from './types';


export const decrementAction = () => dispatch => {
    return dispatch({
        type: DECREMENT_ACT
    })
}