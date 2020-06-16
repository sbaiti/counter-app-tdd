import {
    DECREMENT_ACT,
    INCREMENT_ACt
} from "../actionners/types";

const inialeState = {
    counter: 0
}

export default (state = inialeState, action) => {
    console.log(action.type);
    switch (action.type) {
        case INCREMENT_ACt:
            return {
                counter: state.counter + 1
            }
        case DECREMENT_ACT:
            return {
                counter: state.counter - 1
            }
        default:
            return state
    }
}