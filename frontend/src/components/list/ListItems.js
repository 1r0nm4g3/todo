import React from 'react'
import ListItem from './ListItem'

const ListItems = ({items}) => {
    return (
        <div className="listItems">
            {items.map(item => {
                return <ListItem item={item} key={item.id} />
            })}
        </div>
    )
}

export default ListItems
