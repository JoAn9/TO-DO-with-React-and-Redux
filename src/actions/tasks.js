export function saveTasks(task) {
  return {
    type: 'SAVE_TASKS',
    task,
  }
}