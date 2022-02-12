import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Stations } from './stations';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            stations: Stations,
          
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}