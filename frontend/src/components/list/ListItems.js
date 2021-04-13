import React, {useContext, useEffect} from 'react'
import ListItem from './ListItem'
import ListContext from '../../contexts/list/listContext'
import {useParams} from 'react-router-dom'

const ListItems = () => {
    const listContext = useContext(ListContext)
    const {items, getListItems, setList} = listContext

    let listID = useParams()

    useEffect(() => {
        setList(listID.list)
        getListItems()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="listItems">
            {(items === undefined ) ? "No Items": items.map(item => {
                return <ListItem item={item} key={item._id} />
            })}
        </div>
    )
}

export default ListItems
