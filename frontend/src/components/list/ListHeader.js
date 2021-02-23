import React from 'react'
import ListTitle from './ListTitle'
import ListDetails from './ListDetails'

const ListHeader = () => {
    return (
        <div className="list-header">
          <ListTitle/>
          <ListDetails/>
        </div>
    )
}

export default ListHeader
