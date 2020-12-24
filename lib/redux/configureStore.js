import { createStore,applyMiddleware,compose } from "redux";
import leaguereducers from './reducers'
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from 'redux-thunk';
export default function configureStore(InitialState){
    const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        leaguereducers,
        InitialState,
        composeEnhancers(applyMiddleware(thunk,reduxImmutableStateInvariant()))

    )
}