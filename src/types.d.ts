export interface Task {
  title: string;
  description: string;
  estimatedTime: string;
  priority: 'high' | 'medium' | 'low';
  dependencies?: string[];
}

export interface KanbanColumn {
  title: string;
  tasks?: Task[];
}
