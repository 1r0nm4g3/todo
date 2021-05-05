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

    const addListItem = async (item, listID) => {
        const res = await fetch(`/api/listItems/${listID}`, {
            method: 'POST',
            body: JSON.stringify(item),
                headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        const newItem = await res.json()
        dispatch({
            type: 'ADD_ITEM',
            payload: newItem
        })
    }

    const updateListItem = async (itemID, listID, updates) => {
        const res = await fetch(`/api/listItems/${listID}/${itemID}`, {
            method: 'PUT',
            body: JSON.stringify(updates),
                headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        const updatedItem = await res.json()
        dispatch({
            type: 'UPDATE_ITEM',
            payload: updatedItem
        })
    }

    const deleteSelected = async (listID) => {
        dispatch({type: 'DELETE_ITEM'})
        await fetch(`/api/listItems/${listID}`, {method: 'DELETE'})
    }

    const deleteList = async(listID) => {
        dispatch({type: 'DELETE_LIST', payload: listID})
        await fetch(`api/list/${listID}`, {method: 'DELETE'})
    }

    const createList = async (list) => {
        const res = await fetch(`/api/list`, {
            method: 'POST',
            body: JSON.stringify(list),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const newList = await res.json()
        dispatch({
            type: 'CREATE_LIST',
            payload: newList
        })
    }

    const getListDetails = async(listID) => {
        const res = await fetch(`/api/list/${listID}`, {
            method: 'GET'
        })

        const list = await res.json()
        return list
    }

    const updateList = async(listID, newValues, userID) => {
        const res = (userID) ? await fetch(`/api/list/${listID}/${userID}`, {method: 'PUT', body: JSON.stringify(newValues), headers: {'Content-Type': 'application/json'}}) : await fetch(`/api/list/${listID}`, {method: 'PUT', body: JSON.stringify(newValues), headers: {'Content-Type': 'application/json'}}) 
        const list = await res.json()
        dispatch({
            type: 'UPDATE_LIST',
            payload: list
        })
        return list
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
            setList,
            addListItem,
            updateListItem,
            deleteSelected,
            createList,
            deleteList,
            getListDetails,
            updateList
        }}>
            {props.children}
        </ListContext.Provider>
    )
}

export default ListState
