import React from 'react'

const ListDetails = ({fullList}) => {
    const formatDate = (inputDate) => {
        const date = new Date(inputDate)
        const day = date.getDate()
        const month = date.toLocaleString('default', {month: 'long'})
        const year = date.getFullYear()
        
        return `${day} ${month} ${year}`
    }
    return (
        <div className="list-details">
            <div className="list-details--date">Created {(fullList !== null & fullList !== undefined) ? formatDate(fullList.creationDate) : null}</div>
            <div className="list-details--author">By <a href="/#">{(fullList?.owner?.name) ? fullList.owner.name : null}</a></div>
        </div>
    )
}

export default ListDetails
