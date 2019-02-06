import {FETCH_SW_ERROR, FETCH_SW_START, FETCH_SW_SUCCESS} from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_SW_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_SW_SUCCESS:
      return {
        ...state,
        characters: action.payload
      };
    case FETCH_SW_ERROR:
      return {
        ...state,
        error: action.payload,
        fetching: false
      };
      default:
      return state;
  }
};