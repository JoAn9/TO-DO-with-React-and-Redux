export default function tasksReducer(state = {tasks: [], id: 0, task: ''}, action) {
  switch(action.type) {
    case 'SAVE_TASKS':
    return {
      ...state,
      tasks: [...state.tasks, {id: state.id, task: action.task}],
      id: state.id + 1,
    };
    default: return {
      ...state,
    };
  }
}