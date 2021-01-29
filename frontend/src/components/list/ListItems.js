import React from 'react'
import ListItem from './ListItem'

const ListItems = () => {
    const task = {
        id: 1,
        checked: false,
        title: "My Task 1",
        desc: "Here is where the user can put a short description of the task and add any notes/reminders associated with the task.",
        created: "27 January 2021",
        due: "27 February 2021",
        categories: ["Category 1", "Category 2", "Category 3", "Category 4"]
    }

    const task2 = {
        id: 2,
        checked: true,
        title: "My Task 2",
        desc: "This is an example of a task that has been checked off.",
        created: "27 January 2021",
        due: "27 February 2021",
        categories: ["Category 1", "Category 2", "Category 3", "Category 4"],
        recurring: "Monthly"
    }

    const task3 = {
        id: 3,
        title: "Do the dishes",
        created: "27 January 2021",
        due: "27 February 2021",
        categories: ["Chores"],
        recurring: "Monthly"
    }

    const task4 = {
        id: 4,
        title: "Finish work assignment number 3321",
        desc: "Fix the mistakes that your co-worker, Matthew Bennett, made . Be sure to remind him what an idiot he is so he cries himself to sleep for the next week. You know he likes that.",
        created: "27 January 2021",
        due: "27 February 2021",
        categories: ["Work", "Important"]
    }

    const tasks = [task, task2, task3, task4];

    return (
        <div className="listItems">
            {tasks.map(task => {
                return <ListItem task={task} key={task.id} />
            })}
        </div>
    )
}

export default ListItems
