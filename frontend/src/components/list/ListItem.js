import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const ListItem = ({item}) => {
    const [check, setCheck] = useState(item.checked)

    useEffect(() => {
        setCheck(item.checked)
    }, [item.checked])

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
            <input type="checkbox" name={item.id} id={item.id} checked={check} onChange={() => setCheck(check)}/>
            <label className="listItem--content" htmlFor={item.id} onClick={() => setCheck(!check)}>
                <div className="listItem--content__left">
                    <h4 className="listItem--title">{item.title}</h4>
                    {item.desc && <p className="listItem--description">{item.desc}</p>}
                </div>
                <div className="listItem--content__right">
                    <div className="listItem--details">
                        <span className="listItem--detail">Created on {item.created}</span>
                        <span className="listItem--detail">Due {item.due}</span>
                    </div>
                    <div className="listItem--categories">
                        {item.categories.map((category, key) => {
                            return (
                                <div className={"pill " + catColor(category)} key={key}>{category}</div>
                            )
                        })}
                        {item.recurring && <div className="recurring"></div>}
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
    item: PropTypes.object.isRequired
}


export default ListItem