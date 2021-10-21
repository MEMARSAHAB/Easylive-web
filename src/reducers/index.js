import {combineReducers} from 'redux';

import rooms from './rooms'
import mates from './mates'
import auth  from './auth'


export default combineReducers({
    rooms,
    mates,
    auth,
});