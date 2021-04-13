import React, {useState, useEffect, useContext} from 'react'
import ListContext from '../../contexts/list/listContext'

const AddListModal = ({showAddModal, setAddModal, closeModals}) => {
    const listContext = useContext(ListContext)
    const {addListItem, list, getListItems} = listContext

    const initialState = {title: '', description: '', dueDate: '', recurring: '', categories: []}

    const [item, setItem] = useState(initialState)

    const onChange = e => {
        setItem({...item, [e.target.name]: e.target.value})
    }

    const {title, description, dueDate, recurring, categories} = item

    const onSubmit = (e) => {
        e.preventDefault()
        addListItem(item, list)
        getListItems()
        setAddModal(false)
        document.body.style.overflow = 'unset'
    }

    const clear = (e) => {
        if (e) {e.preventDefault()}
        setItem(initialState)
    }

    useEffect(() => {
        setItem(initialState)
        if(showAddModal === true){
            document.getElementById("title").focus()
        }
    // eslint-disable-next-line
    }, [showAddModal])

    if (showAddModal === true) {
        return (
            <div className="modal--background" onClick={closeModals}>
                <div className="modal">
                    <h2 className="modal--title">Add Item</h2>
                    <form onSubmit={onSubmit}>
                        <div className="form-group-2">
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" name="title" id="title" autoComplete="off" onChange={onChange} value={title}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="dueDate">Due Date</label>
                                <input type="date" name="dueDate" id="dueDate" onChange={onChange} value={dueDate}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="description"onChange={onChange} value={description}>
                            </textarea>
                        </div>
                        <div className="form-group-2">
                            <div className="form-group">
                                <label htmlFor="recurring">Recurrance</label>
                                <select type="text" name="recurring" id="recurring"onChange={onChange} value={recurring}>
                                    <option value="never">Never</option>
                                    <option value="daily">Daily</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="annually">Annually</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="categories">Categories</label>
                                <input type="text" name="categories" id="categories" onChange={onChange} value={categories}/>
                            </div>
                        </div>
                        <div className="button-group-left">
                            <button className="button button__secondary" onClick={clear}>Clear</button>
                            <button className="button button__primary">Add Item</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    return null
}

export default AddListModal
