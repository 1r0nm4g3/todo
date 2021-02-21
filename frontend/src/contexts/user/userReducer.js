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
                ...state,
                user: null
            }
        default:
            return state
    }
}