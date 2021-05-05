import React from 'react'

const listSharedWith = ({list}) => {
    const viewers = list.viewers.filter(viewer => viewer.id !== list.owner.id)

    if (viewers.length===0 && list.share === 0){
        return "This list is private."
    }

    if (list.share !== 0){
        return "This list is public."
    }

    if (viewers.length === 1){
        return (<div className="listSharing">Shared with &nbsp;
        <span>{viewers[0].name}</span>.
    </div>)
    }

    if (viewers.length === 2){
        return (<div className="listSharing">Shared with &nbsp;
        <span>{viewers[0].name}</span> and <span>{viewers[1].name}</span>.
    </div>)
    }

    if (viewers.length === 3){
        return (<div className="listSharing">Shared with &nbsp;
            <span>{viewers[0].name}</span>, <span>{viewers[1].name}</span> and <span>{viewers[2].name}</span>.
        </div>)
    }

    return (<div className="listSharing">Shared with &nbsp;
        <span>{viewers[0].name}</span>, <span>{viewers[1].name}</span>, <span>{viewers[2].name}</span>, and <span>{viewers.length - 3} more.</span>
    </div>)

}

export default listSharedWith
