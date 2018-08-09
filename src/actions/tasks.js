export function saveTasks(task) {
  return {
    type: 'SAVE_TASKS',
    task,
  }
}

export function addInProgress(taskInProgress) {
  return {
    type: 'TASK_IN_PROGRESS',
    taskInProgress,
  }
}

export function addToDo(taskToDo) {
  return {
    type: 'TASK_TO_DO',
    taskToDo,
  }
}

export function addDone(taskDone) {
  return {
    type: 'TASK_DONE',
    taskDone,
  }
}

export function addDoneTodo(taskDone) {
  return {
    type: 'TASK_DONE_TODO',
    taskDone,
  }
}

export function addTodoDone(task) {
  return {
    type: 'TASK_TODO_DONE',
    task,
  }
}