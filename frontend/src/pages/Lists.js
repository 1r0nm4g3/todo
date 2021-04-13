import React, {useContext, useEffect} from 'react'
import ListContext from '../contexts/list/listContext'
import ListRow from '../components/list/ListRow'

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

                <div className="list-title">
                    <h1>My Lists</h1>
                    <div className="list-options">
                    <a href="/#" className="link--button link--button__primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
  <path id="Path_16" data-name="Path 16" d="M12,6v6m0,0v6m0-6h6m-6,0H6" transform="translate(-5 -5)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
                  New List</a>
                </div>
            </div>
        </div>
        <div className="lists">
            {lists && lists.map(list => (
                <ListRow list={list} key={list._id}></ListRow>
            ))}
        </div>
        </main>
    )
}

export default Lists
