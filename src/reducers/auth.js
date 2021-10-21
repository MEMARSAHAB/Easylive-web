
const initialState = {
    loading: false,
    user: [],
    token: '',
    isLogin: false,
    error: ''
}


export default (state = initialState, action) =>{
    switch (action.type) {
        case 'AUTH_REQUEST':
            return {
              ...state,
              loading: true
            }
        case 'AUTH_SUCESS':
        return {
            loading: false,
            user: action.payload.user,
            token: action.payload.token,
            isLogin: true,
            error: ''
        }
        case 'AUTH_FAILURE':
        return {
            loading: false,
            user: [],
            token: '',
            isLogin: false,
            error: action.payload
        }
        default: return state
    }
}