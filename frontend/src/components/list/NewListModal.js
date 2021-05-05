import React, {useState, useEffect, useContext} from 'react'
import ListContext from '../../contexts/list/listContext'

const NewListModal = ({showNewListModal, setNewListModal, closeModals}) => {
    const listContext = useContext(ListContext)
    const {createList} = listContext

    const initialState = {title: '', description: '', type: "Detailed"}

    const [list, setList] = useState(initialState)

    const onChange = e => {
        setList({...list, [e.target.name]: e.target.value})
    }

    const {title, listType, description} = list

    const onSubmit = (e) => {
        e.preventDefault()
        createList(list)
        // getListItems()
        setNewListModal(false)
        document.body.style.overflow = 'unset'
    }

    const clear = (e) => {
        if (e) {e.preventDefault()}
        setList(initialState)
    }

    useEffect(() => {
        setList(initialState)
        if(showNewListModal === true){
            document.getElementById("title").focus()
        }
    // eslint-disable-next-line
    }, [showNewListModal])

    if (showNewListModal === true) {
        return (
            <div className="modal--background" onClick={closeModals}>
                <div className="modal">
                    <h2 className="modal--title">Create New List</h2>
                    <form onSubmit={onSubmit}>
                        <div className="form-group-2">
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" name="title" id="title" autoComplete="off" onChange={onChange} value={title}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="listType">List Type</label>
                                <select type="text" name="listType" id="listType"onChange={onChange} value={listType}>
                                    <option value="detailed">Detailed</option>
                                    <option value="simple">Simple</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="description"onChange={onChange} value={description}>
                            </textarea>
                        </div>
                        <div className="button-group-left">
                            <button className="button button__secondary" onClick={clear}>Clear</button>
                            <button className="button button__primary">Create New List</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    return null
}

export default NewListModal
