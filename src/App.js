import { useState, useEffect } from "react";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";

const App = () => {

    const [taskItems, setTaskItems] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);

    useEffect(() => {
        let datos = localStorage.getItem('Tasks:');
        if(datos){
            setTaskItems(JSON.parse(datos));
        }
    }, [ ])

    useEffect(() => {
        localStorage.setItem('Tasks:', JSON.stringify(taskItems));
    }, [taskItems])

    const AddTask = taskName => {
        if(!taskItems.find(task => task.name === taskName)){
            setTaskItems([...taskItems, {name: taskName, done: false}]);
        }else{
            alert("Ya existe la tarea");
        }
    }

    const toggleTask = task => {
        setTaskItems(
            taskItems.map(t => (t.name === task.name) ? {...t, done: !t.done} : t)
        );
    }

    const cleanTasks = () => {
        setTaskItems(taskItems.filter(task => !task.done));
        setShowCompleted(false);
    }

    return (
        <main className="p-4 bg-dark vh-100 text-white">
            <div className="container col-md-5">
                <TaskCreator AddTask={AddTask}/>
                <TaskTable tasks={taskItems} toggleTask={toggleTask}/>

                <VisibilityControl 
                setShowCompleted={(checked) => setShowCompleted(checked)}
                isChecked={showCompleted}
                cleanTasks={cleanTasks}
                />

                {
                    showCompleted && (
                        <TaskTable tasks={taskItems} toggleTask={toggleTask} showCompleted={showCompleted}/>
                    )
                }
            </div>
        </main>
    );
}

export default App;