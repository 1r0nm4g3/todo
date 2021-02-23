import React, {useContext, useEffect} from 'react'
import ListContext from '../contexts/list/listContext'
import { Link } from 'react-router-dom'

const Lists = () => {
    const listContext = useContext(ListContext)
    const {getLists, lists} = listContext

    useEffect(() => {
        getLists()
    // eslint-disable-next-line
    },[])

    return (
        <main>
        <div className="list-header">
            <h1>My Lists</h1>
        </div>
        <pre>{lists && lists.map(list => (
            <Link to={"/list/"+list._id} key={list._id}>{list.title}</Link>
        ))}</pre>
        </main>
    )
}

export default Lists
