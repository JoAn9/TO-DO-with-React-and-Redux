export function saveTasks(tasks) {
  return {
    type: 'SAVE_TASKS',
    tasks,
  }
}