import * as api from '../api';


export const getRooms = () => async (dispatch) => {
    try {
        dispatch({type: 'FETCH_ROOMS_REQUEST', payload: []});
        const {data} = await api.fetchRooms();
        dispatch({type: 'FETCH_ROOMS_SUCESS', payload: data});

    } catch (error) {
        dispatch({type: 'FETCH_ROOMS_FAILURE', payload: error.message});
        console.log(error); 
    }
}