export interface Task {
  title: string;
  description: string;
  estimatedTime: string;
  priority: 'high' | 'medium' | 'low';
  dependencies?: string[];
}

export interface TaskGroup {
  id: number;
  timestamp: string;
  status: string;
  tasks: Task[];
}

export interface KanbanColumn {
  title: string;
  tasks?: Task[];
}
