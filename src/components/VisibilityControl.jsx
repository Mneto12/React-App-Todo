export const VisibilityControl = ({isChecked,cleanTasks,setShowCompleted}) => {
    
    const handleDelete = () => {
        if(window.confirm('Are you sure want to delete it?')){
            cleanTasks();
        }
    }
    
    return (
        <div className="d-flex justify-content-around border border-white align-items-center rounded-1 p-2">
            <div className="form-check form-switch">
                <input
                className="form-check-input"
                type="checkbox" 
                checked={isChecked}
                onChange={e => setShowCompleted(e.target.checked)}
                />{" "}
            </div>
            <label>Show Completed</label>
            <button className="btn btn-danger" onClick={handleDelete}>Clear</button>
        </div>
    );
}