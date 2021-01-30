import React from 'react'
import PropTypes from 'prop-types'

const ListTitle = ({list}) => {
    return (
        <div className="list-title">
            <h1>My List</h1>
            <div className="list-options">
              <a href="/#">Edit List</a>
              <span> | </span>
              <a href="/#">Add Task</a>
              <span> | </span>
              <a href="/#">Clear Completed Tasks</a>
            </div>
        </div>
    )
}

ListTitle.propTypes = {
    list: PropTypes.object.isRequired
}

export default ListTitle
