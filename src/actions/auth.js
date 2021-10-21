import * as api from '../api';
import { authenticate } from '../helper/authHelper';


export const googlelogin = (idToken) => async (dispatch) => {
    try {
        dispatch({type: 'AUTH_REQUEST', payload: []});
        const { data } = await api.googlelogin(idToken);
        dispatch({type: 'AUTH_SUCESS', payload: data});

        authenticate(data);

    } catch (error) {
        dispatch({type: 'AUTH_FAILURE', payload: error});
        console.log(error); 
    }
}
