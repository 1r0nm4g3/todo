import React from 'react'
import ListDetails from './ListDetails'

const ListHeader = ({addItemClick, onDeleteSelected, fullList, shareClick}) => {
    return (
        <div className="list-header">
          <div className="list-title">
            <h1>{(fullList !== null && fullList !== undefined) ? fullList.title : "None"}</h1>
            <ListDetails fullList={fullList}/>
          </div>
          <div className="list-options">
              <a href="/" className="link--button link--button__primary" onClick={addItemClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
  <path id="Path_16" data-name="Path 16" d="M12,6v6m0,0v6m0-6h6m-6,0H6" transform="translate(-5 -5)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
                  Add Item</a>
              <a href="/#" className="link--button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20.249" viewBox="0 0 20 20.249">
  <path id="Path_18" data-name="Path 18" d="M15.232,5.232l3.536,3.536M16.732,3.732a2.5,2.5,0,0,1,3.536,3.536L6.5,21.036H3V17.464L16.732,3.732Z" transform="translate(-2 -1.787)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
                  Edit List</a>
              <a href="/#" className="link--button" onClick={shareClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20.174" height="20.349" viewBox="0 0 20.174 20.349">
  <path id="Path_19" data-name="Path 19" d="M8.684,13.342a3.008,3.008,0,0,0,0-2.684m0,2.684a3,3,0,1,1,0-2.684m0,2.684,6.632,3.316m-6.632-6,6.632-3.316m0,0a3,3,0,1,0,1.341-4.026,3,3,0,0,0-1.341,4.026Zm0,9.316a3,3,0,1,0,4.026-1.342,3,3,0,0,0-4.026,1.342Z" transform="translate(-2.001 -1.826)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
                  Share</a>
              <a href="/#" className="link--button" onClick={onDeleteSelected}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16">
  <path id="Path_20" data-name="Path 20" d="M12,14l2-2m0,0,2-2m-2,2-2-2m2,2,2,2M3,12l6.414,6.414A2,2,0,0,0,10.828,19H19a2,2,0,0,0,2-2V7a2,2,0,0,0-2-2H10.828a2,2,0,0,0-1.414.586Z" transform="translate(-2 -4)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
                  Delete Checked Items</a>
            </div>
        </div>
    )
}

export default ListHeader
