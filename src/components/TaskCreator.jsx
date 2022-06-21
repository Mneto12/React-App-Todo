import { useState } from "react";

export const TaskCreator = ({AddTask}) => {
    
    const handleForm = (e) => {
        e.preventDefault();
        AddTask(taskName);
    }

    const [taskName, setTaskName] = useState('');

    return (
        <form onSubmit={handleForm} className="mb-1">

            <div>
                <input className="border border-primary rounded-1 mx-4 p-1"
                type="text" 
                placeholder="Enter a new Task"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                />
                <button className="btn btn-primary">Create Task</button>
            </div>

        </form>
    );
}