import React from 'react'
import ListTitle from './ListTitle'
import ListDetails from './ListDetails'
import PropTypes from 'prop-types'

const ListHeader = ({list}) => {
    return (
        <div className="list-header">
          <ListTitle list={list}/>
          <ListDetails list={list}/>
        </div>
    )
}

ListHeader.propTypes = {
  list: PropTypes.object.isRequired
}

export default ListHeader
