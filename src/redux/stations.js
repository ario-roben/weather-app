import * as ActionTypes from './ActionTypes';

export const Stations = (state = {
    isLoading: true,
    errMess: null,
    entities: [],
    results:[]
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_STATIONS:
            return {
                ...state,
                isLoading: false,
                entities: action.payload.map(station => ({
                    id: station.properties.id,
                    name: station.properties.name,
                    stationType: station.properties.stationType,
                    timeZone: station.properties.timeZone,
                })),
                errMess: null,
                results: action.payload.map(station => ({
                    id: station.properties.id,
                    name: station.properties.name,
                    stationType: station.properties.stationType,
                    timeZone: station.properties.timeZone,
                })),
            };
        case ActionTypes.STATIONS_LOADING:
            return {
                ...state,
                isLoading: true,
                stations: [],
                errMess: null
            };
        case ActionTypes.STATIONS_FAILED:
            return {
                ...state,
                isLoading: false,
                stations: [],
                errMess: action.payload
            };
            case ActionTypes.FILTER_STATION:
                const query = action.payload;
                const result = state.entities.filter(station => {
                   return station.name.includes(query)}
                    );
            return {
                ...state,
                isLoading: false,
                results: result,
                errMess: null
            };
        default:
            return state;
    }
};