
const TaskForm = ({createTask, name, handleInputChange, isEditing, updateTask}) => {
  return (
    <form className='task-form' onSubmit={isEditing ? updateTask : createTask}>
        <input type='text' placeholder='add a task' name='name' value={name}
         onChange={handleInputChange}/>
 
         <button type='submit' className='btn'>{isEditing ? "Edit" : "Add"}</button>
    </form>
  )
}

export default TaskForm