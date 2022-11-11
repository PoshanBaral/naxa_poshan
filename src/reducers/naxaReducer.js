import { FETCH_DATA_SUCCESS } from '../constants';
import initialState from './initialState';

const naxaReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_SUCCESS:
        return { 
          ...state, 
          naxaData: action.payload
        }
      default:
        return state
    }
  }

export default naxaReducer;
