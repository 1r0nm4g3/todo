import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const ListItem = ({task}) => {
    const [check, setCheck] = useState(task.checked)

    useEffect(() => {
        setCheck(task.checked)
    }, [])

    const catColor = (category) => {
        switch (category) {
            case "Category 1":
                return "pill__peach"
            case "Category 2":
                return "pill__green"
            case "Category 3":
                return "pill__purple"
            case "Category 4":     
                return "pill__yellow"
            case "Chores":
                return "pill__blue"
            case "Work":
                return "pill__red"
            case "Important":
                return "pill__darkpink"
            default:
                return "pill_peach"
        }
    }

    return (
        <div className="listItem">
            <input type="checkbox" name={task.id} id={task.id} checked={check}/>
            <label className="listItem--content" htmlFor={task.id} checked={task.checked} onClick={() => setCheck(!check)}>
                <div className="listItem--content__left">
                    <h4 className="listItem--title">{task.title}</h4>
                    {task.desc && <p className="listItem--description">{task.desc}</p>}
                </div>
                <div className="listItem--content__right">
                    <div className="listItem--details">
                        <span className="listItem--detail">Created on {task.created}</span>
                        <span className="listItem--detail">Due {task.due}</span>
                    </div>
                    <div className="listItem--categories">
                        {task.categories.map((category, key) => {
                            return (
                                <div className={"pill " + catColor(category)} key={key}>{category}</div>
                            )
                        })}
                        {task.recurring && <div className="recurring"></div>}
                    </div>
                </div>
            </label>
            <div className="listItem--edit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="18" viewBox="0 0 4 18">
  <path id="Path_5" data-name="Path 5" d="M12,5v.01M12,12v.01M12,19v.01M12,6a1,1,0,1,1,1-1A1,1,0,0,1,12,6Zm0,7a1,1,0,1,1,1-1A1,1,0,0,1,12,13Zm0,7a1,1,0,1,1,1-1A1,1,0,0,1,12,20Z" transform="translate(-10 -3)" fill="none" stroke="#831843" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
            </div>
        </div>
    )
}

ListItem.propTypes = {
    task: PropTypes.object.isRequired
}


export default ListItem
