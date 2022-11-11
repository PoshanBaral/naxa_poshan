import { FETCH_DATA, FETCH_DATA_SUCCESS } from '../constants';

//for new implementation
const fetchGetResponse = () => ({
    type: FETCH_DATA
})

const setNaxaResponse = (payload) => ({
    type: FETCH_DATA_SUCCESS,
    payload
})

export {
    fetchGetResponse,
    setNaxaResponse
};
