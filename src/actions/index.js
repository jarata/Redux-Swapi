// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH_SW_START = 'FETCH_SW_START';
export const FETCH_SW_SUCCESS = 'FETCH_SW_SUCCESS';
export const FETCH_SW_ERROR = 'FETCH_SW_ERROR';
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator
export const getSW = () => dispatch => {
    dispatch({ type: FETCH_SW_START });
    axios
        .get('https://swapi.co/api/people')
        .then(response => dispatch({ type: FETCH_SW_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: FETCH_SW_ERROR, payload: error }))
};