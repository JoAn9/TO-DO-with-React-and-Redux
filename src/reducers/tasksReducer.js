import initialState from './initialState';

export default function tasksReducer(state = initialState, action) {
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
        tasks: [...state.tasks.filter(item => item.id !== action.taskInProgress.id)],
      };
    default: return {
      ...state,
    };
  }
}