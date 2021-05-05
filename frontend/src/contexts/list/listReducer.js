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
        case 'DELETE_LIST':
            return {
                ...state,
                lists: state.lists.filter(list => list._id !== action.payload)
            }
        case 'ADD_ITEM':
            return {
                ...state,
                items: (state.items) ? [...state.items, action.payload] : [action.payload]
            }
        case 'UPDATE_ITEM':
            return {
                ...state,
                items: state.items.map(item => item._id === action.payload._id ? action.payload : item )
            }
        case 'CREATE_LIST':
            return {
                ...state,
                lists: [...state.lists, action.payload]
            }
        case 'UPDATE_LIST':
            return {
                ...state,
                lists: state.lists.map(list => list._id === action.payload._id ? action.payload :  list)
            }
        default:
            return state
    }
}