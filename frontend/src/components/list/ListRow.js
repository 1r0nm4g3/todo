import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import ListSharedWith from './ListSharedWith'
import ListContext from '../../contexts/list/listContext'

const ListRow = ({list, shareListClick}) => {

    const listContext = useContext(ListContext)
    const {deleteList} = listContext

    const formatDate = (inputDate) => {
        const date = new Date(inputDate)
        const day = date.getDate()
        const month = date.toLocaleString('default', {month: 'long'})
        const year = date.getFullYear()
        
        return `${day} ${month} ${year}`
    }

    return (
        <div className="list">
            <Link to={"/list/"+list._id}><h3>{list.title}</h3></Link>
        <div className="listRow" key={list._id}>
            <div className="listInfo">
                <p>{list.description}</p>
            </div>
            <ListSharedWith list={list}></ListSharedWith>
            <div className="listDetails">
                <div className="listDetail">Created on <span>{formatDate(list.creationDate)}</span></div>
                <div className="listDetail">Last Visited on <span>{formatDate(list.lastVisited)}</span></div>
                <div className="listDetail">Created by <span>{list.owner.name}</span></div>
            </div>
        </div>
            <div className="listButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11.114" viewBox="0 0 11 11.114">
  <path id="Path_18" data-name="Path 18" d="M9.8,4.237,11.76,6.2M10.629,3.406a1.388,1.388,0,0,1,1.964,1.96L4.944,13H3v-1.98Z" transform="translate(-2.5 -2.385)" fill="none" stroke="#831843" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
</svg> Edit List
            </div>
            <div className="listButton" onClick={(e) => {shareListClick(e, list)}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="11.094" height="11.189" viewBox="0 0 11.094 11.189">
  <path id="Path_19" data-name="Path 19" d="M6.158,8.745a1.671,1.671,0,0,0,0-1.491m0,1.491a1.667,1.667,0,1,1,0-1.491m0,1.491,3.684,1.842M6.158,7.254,9.842,5.412m0,0a1.667,1.667,0,1,0,.745-2.236,1.667,1.667,0,0,0-.745,2.236Zm0,5.175a1.667,1.667,0,1,0,2.237-.746,1.667,1.667,0,0,0-2.237.746Z" transform="translate(-2.501 -2.405)" fill="none" stroke="#831843" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
</svg>
Share
            </div>
        <div className="listButton" onClick={() => {deleteList(list._id)}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8.778" viewBox="0 0 11 8.778">
  <path id="Path_20" data-name="Path 20" d="M8,10,9.111,8.889m0,0,1.111-1.111M9.111,8.889,8,7.778M9.111,8.889,10.222,10M3,8.889l3.563,3.563a1.111,1.111,0,0,0,.786.326h4.54A1.111,1.111,0,0,0,13,11.667V6.111A1.111,1.111,0,0,0,11.889,5H7.349a1.111,1.111,0,0,0-.785.325Z" transform="translate(-2.5 -4.5)" fill="none" stroke="#831843" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
</svg>
        Delete List
        </div>
        </div>
    )
}

export default ListRow
