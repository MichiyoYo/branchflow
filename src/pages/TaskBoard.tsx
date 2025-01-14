import { useState } from 'react';
import { motion } from 'framer-motion';
import { Page } from '@/components/layout';
import { KanbanBoard } from '@/features/kanban/KanbanBoard';
import { Button } from '@/components/ui/button';
import { LayoutGrid, List, Calendar, Plus, Search } from 'lucide-react';

export const TaskBoard = () => {
  const [view, setView] = useState<'kanban' | 'list' | 'timeline'>('kanban');

  return (
    <Page pageTitle='Task Board'>
      {/* Tool Bar */}
      <div className='mb-8'>
        <div className='flex flex-col sm:flex-row justify-between gap-4'>
          {/* Left Side - View Toggle */}
          <div className='flex items-center space-x-2'>
            <Button
              variant={view === 'kanban' ? 'default' : 'ghost'}
              size='sm'
              onClick={() => setView('kanban')}
              className='flex items-center gap-2'
            >
              <LayoutGrid className='h-4 w-4' />
              Board
            </Button>
            <Button
              variant={view === 'list' ? 'default' : 'ghost'}
              size='sm'
              onClick={() => setView('list')}
              className='flex items-center gap-2'
            >
              <List className='h-4 w-4' />
              List
            </Button>
            <Button
              variant={view === 'timeline' ? 'default' : 'ghost'}
              size='sm'
              onClick={() => setView('timeline')}
              className='flex items-center gap-2'
            >
              <Calendar className='h-4 w-4' />
              Timeline
            </Button>
          </div>

          {/* Right Side - Actions */}
          <div className='flex items-center space-x-2'>
            <div className='relative'>
              <Search className='h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400' />
              <input
                type='text'
                placeholder='Search tasks...'
                className='pl-9 pr-4 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
              />
            </div>
            <Button className='bg-purple-500 hover:bg-purple-600 text-white'>
              <Plus className='h-4 w-4 mr-2' />
              Add Task
            </Button>
          </div>
        </div>
      </div>

      {/* Board Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='w-full'
      >
        <KanbanBoard />
      </motion.div>
    </Page>
  );
};
