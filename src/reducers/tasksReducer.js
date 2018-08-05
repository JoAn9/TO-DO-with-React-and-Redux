export default function tasksReducer(state = {
  tasks: [], 
  id: 0, 
  task: '', 
  tasksInProgress: [],
  taskInProgress: '',
}, 
action) {
  switch(action.type) {
    case 'SAVE_TASKS':
    return {
      ...state,
      tasks: [...state.tasks, {id: state.id, task: action.task}],
      id: state.id + 1,
    };
    case 'TASK_IN_PROGRESS':
      return {
        ...state,
        tasksInProgress: [...state.tasksInProgress, action.taskInProgress],
      };
    default: return {
      ...state,
    };
  }
}