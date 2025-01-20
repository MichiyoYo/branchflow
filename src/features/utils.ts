import { Task } from '@/types';

export const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'text-red-500';
    case 'medium':
      return 'text-yellow-500';
    case 'low':
      return 'text-green-500';
    default:
      return 'text-slate-500';
  }
};

export const getKanbanCardPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'bg-red-100 text-red-700';
    case 'medium':
      return 'bg-yellow-100 text-yellow-700';
    case 'low':
      return 'bg-green-100 text-green-700';
    default:
      return 'bg-slate-100 text-slate-700';
  }
};

export const saveToLocalStorage = (
  tasks: Task[],
  setError: (error: string | null) => void
) => {
  try {
    const savedTasks = JSON.parse(
      localStorage.getItem('branchflow-tasks') || '[]'
    );
    const updatedTasks = [
      ...savedTasks,
      {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        status: 'todo',
        tasks: tasks,
      },
    ];
    localStorage.setItem('branchflow-tasks', JSON.stringify(updatedTasks));
  } catch (error) {
    console.error('Error saving tasks:', error);
    setError('Failed to save tasks. Please try again.');
    return false;
  }
};

export const exportToJson = (tasks: Task[]) => {
  const blob = new Blob([JSON.stringify(tasks, null, 2)], {
    type: 'application/json',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `branchflow-tasks-${
    new Date().toISOString().split('T')[0]
  }.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const copyToClipboard = (tasks: Task[]) => {
  const markdownTasks = tasks
    .map((task) => {
      return (
        `## ${task.title}\n` +
        `**Priority:** ${task.priority}\n` +
        `**Estimated Time:** ${task.estimatedTime}\n\n` +
        `${task.description}\n\n` +
        (task.dependencies && task.dependencies.length > 0
          ? `**Dependencies:**\n${task.dependencies
              .map((d) => `- ${d}`)
              .join('\n')}\n`
          : '')
      );
    })
    .join('\n---\n\n');

  navigator.clipboard.writeText(markdownTasks);
};
