
const initialState = {
    loading: false,
    mates: [],
    error: ''
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case 'FETCH_MATES_REQUEST':
            return {
              ...state,
              loading: true
            }
        case 'FETCH_MATES_SUCCESS':
        return {
            loading: false,
            mates: action.payload,
            error: ''
        }
        case 'FETCH_MATES_FAILURE':
        return {
            loading: false,
            mates: [],
            error: action.payload
        }
        default: return state
    }
}