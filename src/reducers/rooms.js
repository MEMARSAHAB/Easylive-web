
const initialState = {
    loading: false,
    rooms: [],
    error: ''
}


export default (state = initialState, action) =>{
    switch (action.type) {
        case 'FETCH_ROOMS_REQUEST':
            return {
              ...state,
              loading: true
            }
        case 'FETCH_ROOMS_SUCESS':
        return {
            loading: false,
            rooms: action.payload,
            error: ''
        }
        case 'FETCH_ROOMS_FAILURE':
        return {
            loading: false,
            rooms: [],
            error: action.payload
        }
        default: return state
    }
}