import { combineReducers } from 'redux';

import naxaReducer from './naxaReducer';

const rootReducer = combineReducers({
    naxa: naxaReducer
});

export default rootReducer;
