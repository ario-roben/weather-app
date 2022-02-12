import * as ActionTypes from './ActionTypes';

export const fetchStations = () => (dispatch) => {
    dispatch(stationsLoading(true));

    return fetch('https://api.weather.gov/radar/stations')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': '
                    + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => dispatch(addStations(response.features)))
        .catch(error => dispatch(stationsLoading(error.message)));


}
export const stationsLoading = () => ({
    type: ActionTypes.STATIONS_LOADING
});

export const stationsFailed = (errmsg) => ({
    type: ActionTypes.STATIONS_FAILED,
    payload: errmsg
});

export const addStations = (stations) => ({
    type: ActionTypes.ADD_STATIONS,
    payload: stations
});

export function searchStation(query) {
  return {type: ActionTypes.FILTER_STATION,  payload: query};
}

