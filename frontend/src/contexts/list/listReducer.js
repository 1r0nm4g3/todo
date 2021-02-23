// eslint-disable-next-line
export default (state, action) => {
    switch(action.type){
        case 'LOAD_LIST_ITEMS':
            return {
                ...state,
                items: action.payload.items,
                list: action.payload.list
            }
        case 'LOAD_LISTS':
            return {
                ...state,
                lists: action.payload,
            }
        case 'CLEAR_LIST_STATE':
            return {
                items: [],
                loading: false,
                error: null,
                list: null,
                lists: []
            }
        case 'SET_LIST':
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}