import { createStore,applyMiddleware } from "redux";
import leaguereducers from './reducers'
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from 'redux-thunk';
export default function configureStore(InitialState){
    
    return createStore(
        leaguereducers,
        InitialState,
        applyMiddleware(thunk,reduxImmutableStateInvariant())

    )
}
