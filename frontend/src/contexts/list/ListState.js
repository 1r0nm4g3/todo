import React,  { useReducer} from 'react'
import ListContext from './listContext'
import listReducer from './listReducer'

const ListState = props => {
    const initialState = {
        items: [],
        loading: false,
        error: null,
        list: null,
        lists: []
    }
    
    const [state, dispatch] = useReducer(listReducer, initialState)

    const getListItems = async (listID) => {
        if(listID === undefined || listID === null){
            return "Error"
        }

        const res = await fetch(`/api/listItems/${listID}`, {method: 'GET', credentials: 'include'})
        const data = await res.json()
        dispatch({
            type: 'LOAD_LIST_ITEMS',
            payload: {
                items: data.items,
                list: listID
            }
        })
    }

    const getLists = async () => {
        const res = await fetch(`/api/list`, {method: 'GET', credentials: 'include'})
        const data = await res.json()
        dispatch({
            type: 'LOAD_LISTS',
            payload: data.lists
        })
    }

    const clearListState = async () => {
        dispatch({
            type: 'CLEAR_LIST_STATE'
        })
    }

    const setList = async (listID) => {
        dispatch({
            type: 'SET_LIST',
            payload: listID
        })
        getListItems(listID)
    }

    return (
        <ListContext.Provider value={{
            items: state.items,
            loading: state.loading,
            error: state.error,
            list: state.list,
            lists: state.lists,
            getListItems,
            getLists,
            clearListState,
            setList
        }}>
            {props.children}
        </ListContext.Provider>
    )
}

export default ListState
