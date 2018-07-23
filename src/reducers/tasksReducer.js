export default function tasksReducer(state = {tasks: []}, action) {
  switch(action.type) {
    case 'SAVE_TASKS':
    return {
      ...state,
      tasks: action.tasks,
    };
    default: return {
      ...state,
    };
  }
}