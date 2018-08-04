export function saveTasks(task) {
  return {
    type: 'SAVE_TASKS',
    task,
  }
}

export function taskInProgress(task) {
  return {
    type: 'TASK_IN_PROGRESS',
    taskInProgress,
  }
}