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
        case 'CHECK_ITEM':
            return {
                ...state,
                items: state.items.map(item => item._id === action.payload.id ? item : {...item, checked: !item.checked})
            }
        case 'SET_LIST':
            return {
                ...state,
                list: action.payload
            }
        case 'DELETE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item.checked !== true)
            }
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case 'UPDATE_ITEM':
            return {
                ...state,
                items: state.items.map(item => item._id === action.payload._id ? action.payload : item )
            }
        default:
            return state
    }
}