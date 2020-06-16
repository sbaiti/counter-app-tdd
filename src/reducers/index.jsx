import { combineReducers } from "redux";
import counerRed from './conterRed'

export default combineReducers(
    {
        ctr: counerRed
    }
)