export function areTasksEqual(prevProps, nextProps) {
  const prevTask = prevProps.task;
  const nextTask = nextProps.task;
  const prevTemp = prevProps.temp || {};
  const nextTemp = nextProps.temp || {};
  // Compare task fields
  const isTaskEqual =
    prevTask.id === nextTask.id &&
    prevTask.title === nextTask.title &&
    prevTask.dueDate === nextTask.dueDate &&
    prevTask.isDone === nextTask.isDone;

  // Compare temp edits shallowly
  const isTempEqual =
    prevTemp.title === nextTemp.title &&
    prevTemp.dueDate === nextTemp.dueDate;
  return isTaskEqual && isTempEqual;
}