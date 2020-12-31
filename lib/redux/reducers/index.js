import { combineReducers } from 'redux';
import league from './leaguereducer'
import user from './userreducer'
const rootReducer = combineReducers({
    league,
    user
})
export default rootReducer;
