import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { KanbanColumn } from '@/types';
import { getKanbanCardPriorityColor } from '../utils';

export const KanbanBoard = () => {
  const columns: KanbanColumn[] = [
    {
      title: 'To Do',
      tasks: [],
    },
    {
      title: 'In Progress',
      tasks: [],
    },
    {
      title: 'Done',
      tasks: [],
    },
  ];

  return (
    <div className='w-full px-4'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto'>
        {columns.map((column) => (
          <div key={column.title} className='flex flex-col h-full'>
            <div className='mb-4'>
              <h3 className='text-lg font-semibold text-slate-800'>
                {column.title}
              </h3>
              <div className='h-1 w-full bg-purple-200 rounded-full mt-2'></div>
            </div>

            <div className='flex-1 bg-purple-50/50 rounded-lg p-4 min-h-[500px]'>
              {column?.tasks?.map((task, index) => (
                <Card
                  key={index}
                  className='mb-4 bg-white shadow-sm hover:shadow-md transition-shadow cursor-move'
                >
                  <CardHeader className='pb-2'>
                    <div className='flex justify-between items-start'>
                      <CardTitle className='text-base'>{task.title}</CardTitle>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${getKanbanCardPriorityColor(
                          task.priority
                        )}`}
                      >
                        {task.priority}
                      </span>
                    </div>
                    <CardDescription className='text-sm mt-1'>
                      {task.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='flex items-center text-sm text-slate-500'>
                      <Clock className='h-4 w-4 mr-1' />
                      {task.estimatedTime}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
