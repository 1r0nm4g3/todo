// eslint-disable-next-line
export default (state, action) => {
    switch(action.type){
        case 'AUTH_ERROR':
            return {
                ...state
            }
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                user: null,
                loading: true,
                error: null
            }
        case 'CHECK_AUTH':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}