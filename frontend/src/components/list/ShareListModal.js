import React, {useState, useEffect, useContext} from 'react'
import ListContext from '../../contexts/list/listContext'

const ShareListModal = ({showShareModal, setShareModal, closeModals}) => {
    const listContext = useContext(ListContext)
    const {updateList, lists} = listContext

    const initialState = {sharing: "", listType: "0", shareSettings: "viewer"}

    const [fields, setFields] = useState(initialState)
    const [options,  setOptions] = useState([])

    const onChange = e => {
        setFields({...fields, [e.target.name]: e.target.value})
    }

    const {sharing, listType, shareSettings} = fields

    const onSubmit = (e) => {
        e.preventDefault()
        setShareModal(false)
        updateList(showShareModal, {
            "share": listType
        })
        document.body.style.overflow = 'unset'
    }

    const getShareResults = async (sharing) => {
        if (sharing === "" || sharing === null || sharing === undefined){
            return []
        }
        const res = await fetch(`/api/users/users/${sharing}`, {
            method: 'GET'
        })

        const users = await res.json()
        return users
    }
    
    const clear = (e) => {
        if (e) {e.preventDefault()}
        setFields(initialState)
        setOptions([])
    }

    useEffect(() => {
        setFields(initialState)
        if(showShareModal !== false){
            document.getElementById("sharing").focus()
        }
    // eslint-disable-next-line
    }, [showShareModal])

    useEffect(() => {
        (async () => {
            setOptions(await getShareResults(sharing))
        })()
    },[sharing])

    const onClickUser = (e, option) => {
        if (shareSettings === "viewer"){
            updateList(showShareModal, {
                "viewers": {
                    "id": option._id,
                    "name": option.name
                }
            })
        }
        if (shareSettings === "author"){
            updateList(showShareModal, {
                "viewers": {
                    "id": option._id,
                    "name": option.name
                },
                "authors": option._id
            })
        }
        setOptions([])
        clear(e)
    }

    const onClickRemoveUser = (e, userID) => {
        updateList(showShareModal, {"viewers": {"id": userID}, "authors": userID}, userID)
    }

    if (showShareModal) {
        return (
            <div className="modal--background" onClick={closeModals}>
                <div className="modal">
                    <h2 className="modal--title">Sharing</h2>
                    <form onSubmit={onSubmit}>
                        {/* {lists.map(list => (list._id === showShareModal && list.viewers.length > 1) ? (<h3>Shared with:</h3>) : null)} */}
                        {(lists.filter(list => (list._id === showShareModal && list.viewers.length > 1)).length > 0) && (<h3>Shared with:</h3>)}
                    {lists.map(list => list._id === showShareModal ? list.viewers.filter(viewer => viewer.id !== list.owner.id).map(viewer => (
                        <div key={viewer.id} onClick={(e) => onClickRemoveUser(e, viewer.id)}>{viewer.name}</div>
                    )) : null)}
                        <div className="form-group-2">
                        <div className="form-group">
                            <label htmlFor="sharing">Share with</label>
                            <input type="text" name="sharing" id="sharing" autoComplete="off" onChange={onChange} value={sharing}/>
                            <div className="input-option-grouping">
                            {options && options.map(option => (
                                <div className="input-option" key={option._id} onClick={(e) => {onClickUser(e, option)}}>{option.name} ({option.email})</div>
                            ))}
                            </div>
                        </div>
                        <div className="form-group">
                                <label htmlFor="shareSettings">Permissions</label>
                                <select type="text" name="shareSettings" id="shareSettings" onChange={onChange} value={shareSettings}>
                                    <option value="viewer">Can View</option>
                                    <option value="author">Can Edit</option>
                                </select>
                            </div>
                        </div>
                            <div className="form-group">
                            <label htmlFor="listType">List Type</label>
                                <select type="text" name="listType" id="listType"onChange={onChange} value={listType}>
                                    <option value="0">Private</option>
                                    <option value="1">Public</option>
                                </select>
                            </div>
                        <div className="button-group-left">
                            <button className="button button__secondary" onClick={clear}>Clear</button>
                            <button className="button button__primary">Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    return null
}

export default ShareListModal
