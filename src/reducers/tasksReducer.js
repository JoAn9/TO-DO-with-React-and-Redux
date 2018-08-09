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
    case 'TASK_TO_DO':
    return {
      ...state,
      tasks: [...state.tasks, action.taskToDo],
      tasksInProgress: [...state.tasksInProgress.filter(item => item.id !== action.taskToDo.id)],
    };
    case 'TASK_DONE':
    return {
      ...state,
      tasksInProgress: [...state.tasksInProgress.filter(item => item.id !== action.taskDone.id)],
      tasksDone: [...state.tasksDone, action.taskDone],
    };
    case 'TASK_DONE_TODO':
    return {
      ...state,
      tasks: [...state.tasks.filter(item => item.id !== action.taskDone.id)],
      tasksDone: [...state.tasksDone, action.taskDone],
    };
    case 'TASK_TODO_FROM_DONE':
    return {
      ...state,
      tasks: [...state.tasks, action.task],
      tasksDone: [...state.tasksDone.filter(item => item.id !== action.task.id)],
    };
    case 'TASK_INPROGRESS_FROM_DONE':
    return {
      ...state,
      tasksInProgress: [...state.tasksInProgress, action.task],
      tasksDone: [...state.tasksDone.filter(item => item.id !== action.task.id)],
    };
    default: return {
      ...state,
    };
  }
}