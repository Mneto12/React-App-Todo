import { TaskRow } from "./TaskRow";

export const TaskTable = ({tasks, toggleTask, showCompleted = false}) => {

    const tasktablerows = (doneValue) => {
        return (
            tasks
            .filter(task => task.done === doneValue)
            .map((task) => (
                <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
            ))
        )
    }

    return (
        <table className="table table-dark table-striped text-white table-hover">

            <thead>
                <tr>
                <th>Tasks</th>
                </tr>
            </thead>

            <tbody className="table-group-divider">
                {tasktablerows(showCompleted)}
            </tbody>
            
        </table>
    );
};
